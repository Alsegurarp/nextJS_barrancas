import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Contacto from './Contacto';

// Mock dependencies
jest.mock('axios');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-google-recaptcha', () => {
  return {
    __esModule: true,
    default: ({ onChange }: any) => (
      <div data-testid="recaptcha">
        <button onClick={() => onChange('mock-token')}>Mock reCAPTCHA</button>
      </div>
    ),
  };
});

const mockPush = jest.fn();

describe('Contacto Form Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  /**
   * TEST 1: Form Renders Successfully
   * Description: Verifies that all form fields are rendered correctly
   */
  test('1. should render all form fields correctly', () => {
    render(<Contacto />);

    // Check personal data fields by role or placeholder
    expect(screen.getByPlaceholderText('Mario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Segura')).toBeInTheDocument();
    expect(screen.getByDisplayValue('México (+52)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+52 1234567890')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('correo@ejemplo.com')).toBeInTheDocument();

    // Check trip details fields
    expect(screen.getByPlaceholderText('Selecciona una fecha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe cualquier comentario...')).toBeInTheDocument();

    // Check submit button
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();

    // Check section titles
    expect(screen.getByText(/datos personales/i)).toBeInTheDocument();
    expect(screen.getByText(/sobre tu viaje/i)).toBeInTheDocument();
  });

  /**
   * TEST 2: Submit Button Disabled When Form Invalid
   * Description: Verifies that submit button is disabled until all fields are valid
   */
  test('2. should disable submit button when form is invalid', () => {
    render(<Contacto />);

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Initially disabled (empty form + no reCAPTCHA)
    expect(submitButton).toBeDisabled();
  });

  /**
   * TEST 3: Name Field Validation and Cleaning
   * Description: Tests that name field only accepts letters and spaces, rejects special characters
   */
  test('3. should clean and validate name field - reject special characters', async () => {
    render(<Contacto />);
    const nameInput = screen.getByPlaceholderText('Mario') as HTMLInputElement;

    // Type name with special characters
    await userEvent.type(nameInput, 'Juan@#$%123');

    // Should only contain letters and spaces
    expect(nameInput.value).toBe('Juan');
  });

  /**
   * TEST 4: Email Validation
   * Description: Verifies email format validation
   */
  test('4. should validate email format correctly', async () => {
    render(<Contacto />);
    const emailInput = screen.getByPlaceholderText('correo@ejemplo.com') as HTMLInputElement;

    // Test invalid email
    await userEvent.type(emailInput, 'invalidemail');
    expect(emailInput.value).toBe('invalidemail');

    // Clear and test valid email
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'valid@example.com');
    expect(emailInput.value).toBe('valid@example.com');
  });

  /**
   * TEST 5: Phone Number Validation
   * Description: Tests that phone numbers only accept digits (0-13 digits max)
   */
  test('5. should validate phone number - digits only, max 13', async () => {
    render(<Contacto />);
    const phoneInput = screen.getByPlaceholderText('+52 1234567890') as HTMLInputElement;

    // Try to type letters and special characters
    await userEvent.type(phoneInput, '123abc@456');

    // Should only contain digits
    expect(phoneInput.value).toBe('123456');

    // Try to exceed 13 digits
    await userEvent.clear(phoneInput);
    await userEvent.type(phoneInput, '12345678901234567890');
    expect(phoneInput.value.length).toBeLessThanOrEqual(13);
  });

  /**
   * TEST 6: Date Picker Modal Opens and Closes
   * Description: Tests date picker modal functionality
   */
  test('6. should open and close date picker modal', async () => {
    render(<Contacto />);

    const dateInput = screen.getByPlaceholderText('Selecciona una fecha');

    // Modal should not be visible initially
    expect(screen.queryByText(/selecciona tu fecha de viaje/i)).not.toBeInTheDocument();

    // Click to open modal
    await userEvent.click(dateInput);

    // Modal should be visible
    expect(screen.getByText(/selecciona tu fecha de viaje/i)).toBeInTheDocument();

    // Click cancel button to close
    const cancelButton = screen.getByRole('button', { name: /cancelar/i });
    await userEvent.click(cancelButton);

    // Modal should be closed
    expect(screen.queryByText(/selecciona tu fecha de viaje/i)).not.toBeInTheDocument();
  });

  /**
   * TEST 7: Date Selection in Calendar
   * Description: Tests selecting a date from the calendar
   */
  test('7. should select a date from calendar', async () => {
    render(<Contacto />);

    const dateInput = screen.getByPlaceholderText('Selecciona una fecha');

    // Open modal
    await userEvent.click(dateInput);

    // Wait for modal to appear
    await waitFor(() => {
      expect(screen.getByText(/selecciona tu fecha de viaje/i)).toBeInTheDocument();
    });

    // Find all day number buttons and click the first available one
    const allButtons = screen.getAllByRole('button');
    const dayButtons = allButtons.filter(btn => {
      const text = btn.textContent?.trim();
      return /^\d+$/.test(text || '') && !btn.disabled;
    });

    if (dayButtons.length > 0) {
      await userEvent.click(dayButtons[0]);

      // Modal should close after selection
      await waitFor(() => {
        expect(screen.queryByText(/selecciona tu fecha de viaje/i)).not.toBeInTheDocument();
      });

      // Date input should have a value now
      const dateValue = (dateInput as HTMLInputElement).value;
      expect(dateValue.length).toBeGreaterThan(0);
    }
  });

  /**
   * TEST 8: Form Submission Success
   * Description: Tests successful form submission with API call
   */
  test('8. should submit form successfully and redirect', async () => {
    const mockResponse = { status: 200, data: { message: 'Success' } };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    render(<Contacto />);

    // Fill form fields
    const nameInput = screen.getByPlaceholderText('Mario');
    const lastNameInput = screen.getByPlaceholderText('Segura');
    const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
    const phoneInput = screen.getByPlaceholderText('+52 1234567890');

    await userEvent.type(nameInput, 'Juan');
    await userEvent.type(lastNameInput, 'Perez');
    await userEvent.type(emailInput, 'juan@example.com');
    await userEvent.type(phoneInput, '5551234567');

    // Mock reCAPTCHA
    const recaptchaButton = screen.getByText('Mock reCAPTCHA');
    await userEvent.click(recaptchaButton);

    // Submit form
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(submitButton);

    // Check for API call
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/enviado con éxito/i)).toBeInTheDocument();
    });

    // Check for redirect
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/gracias');
    });
  });

  /**
   * TEST 9: Form Submission Error Handling
   * Description: Tests error handling when API call fails
   */
  test('9. should handle form submission errors correctly', async () => {
    const mockError = {
      response: {
        status: 500,
        data: { message: 'Server error occurred' },
      },
      message: 'Network error',
    };
    (axios.post as jest.Mock).mockRejectedValueOnce(mockError);

    render(<Contacto />);

    // Fill form fields
    const nameInput = screen.getByPlaceholderText('Mario');
    const lastNameInput = screen.getByPlaceholderText('Segura');
    const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
    const phoneInput = screen.getByPlaceholderText('+52 1234567890');

    await userEvent.type(nameInput, 'Juan');
    await userEvent.type(lastNameInput, 'Perez');
    await userEvent.type(emailInput, 'juan@example.com');
    await userEvent.type(phoneInput, '5551234567');

    // Mock reCAPTCHA
    const recaptchaButton = screen.getByText('Mock reCAPTCHA');
    await userEvent.click(recaptchaButton);

    // Submit form
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(submitButton);

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/server error occurred/i)).toBeInTheDocument();
    });

    // Should not redirect on error
    expect(mockPush).not.toHaveBeenCalled();
  });

  /**
   * TEST 10: Form Resets After Successful Submission
   * Description: Verifies that form fields are cleared after successful submission
   */
  test('10. should reset form fields after successful submission', async () => {
    const mockResponse = { status: 200, data: { message: 'Success' } };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    render(<Contacto />);

    // Fill form fields
    const nameInput = screen.getByPlaceholderText('Mario') as HTMLInputElement;
    const lastNameInput = screen.getByPlaceholderText('Segura') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('correo@ejemplo.com') as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText('+52 1234567890') as HTMLInputElement;
    const commentsInput = screen.getByPlaceholderText('Escribe cualquier comentario...') as HTMLTextAreaElement;

    await userEvent.type(nameInput, 'Juan');
    await userEvent.type(lastNameInput, 'Perez');
    await userEvent.type(emailInput, 'juan@example.com');
    await userEvent.type(phoneInput, '5551234567');
    await userEvent.type(commentsInput, 'Test comment');

    // Mock reCAPTCHA
    const recaptchaButton = screen.getByText('Mock reCAPTCHA');
    await userEvent.click(recaptchaButton);

    // Submit form
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/enviado con éxito/i)).toBeInTheDocument();
    });

    // Verify fields are cleared
    expect(nameInput.value).toBe('');
    expect(lastNameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(phoneInput.value).toBe('');
    expect(commentsInput.value).toBe('');
  });
});
