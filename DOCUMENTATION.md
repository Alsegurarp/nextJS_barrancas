# Barrancas del Cobre Premium - Complete Documentation

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Key Features](#key-features)
5. [How the Website Works](#how-the-website-works)
6. [Components Guide](#components-guide)
7. [Pages Guide](#pages-guide)
8. [Adding New Content](#adding-new-content)
9. [Styling System](#styling-system)
10. [Forms & Email Integration](#forms--email-integration)
11. [Animations](#animations)
12. [Dark Mode](#dark-mode)
13. [Deployment](#deployment)

---

## Project Overview

**Barrancas del Cobre Premium** is a modern, interactive travel website built with Next.js. It showcases travel itineraries, experiences, and allows visitors to book trips through an integrated contact form.

### What Makes This Website Special:

- 🎨 **Beautiful animations** - Smooth, professional animations powered by GSAP
- 🌙 **Dark mode support** - Users can switch between light and dark themes
- 📱 **Fully responsive** - Works great on phones, tablets, and desktops
- ⚡ **Fast loading** - Next.js optimizes everything automatically
- 🔐 **Form validation** - Contact forms have built-in protection against spam
- 📧 **Email integration** - Automatically sends emails when customers submit forms

---

## Project Structure

Think of the project like a house. Different rooms serve different purposes. Here's how our website is organized:

```
nextjs_barrancas_premium/
│
├── src/                          # 🏠 Main house - all website code lives here
│   ├── app/                      # 🚪 Pages and routes (URLs you can visit)
│   │   ├── page.tsx              # Home page (/)
│   │   ├── contacto/page.tsx      # Contact page (/contacto)
│   │   ├── itinerarios/page.tsx   # Itineraries page (/itinerarios)
│   │   ├── blog/page.tsx          # Blog page (/blog)
│   │   ├── nosotros/page.tsx      # About us page (/nosotros)
│   │   ├── gracias/page.tsx       # Thank you page (shown after form submission)
│   │   ├── error-contacto/page.tsx # Error page (shown if form fails)
│   │   ├── not-found.tsx          # 404 page (shown when page doesn't exist)
│   │   ├── layout.tsx            # Layout wrapper for all pages
│   │   └── globals.css           # Global styles applied everywhere
│   │
│   ├── components/               # 🧩 Reusable building blocks
│   │   ├── Carousel.tsx          # Sliding carousel of items
│   │   ├── HeroSection.tsx       # Large banner at top of page
│   │   ├── Faqs.tsx              # Frequently asked questions
│   │   ├── StarBorder.tsx        # Button with decorative star border
│   │   └── ...                   # Other UI components
│   │
│   ├── components-gsap/          # 🎬 Animated components (with GSAP)
│   │   ├── BestSellersCards.tsx  # Scrollable cards showing popular itineraries
│   │   ├── Hero.tsx              # Animated hero section
│   │   ├── About.tsx             # About section with animations
│   │   ├── Footer.tsx            # Website footer
│   │   └── ...                   # Other animated components
│   │
│   ├── sections/                 # 📑 Page sections (groups of components)
│   │   ├── GridFilter.tsx        # Grid layout with filter options
│   │   ├── HeroItinerario.tsx    # Hero for itineraries page
│   │   └── ...                   # Other sections
│   │
│   ├── views/                    # 📄 Full page layouts
│   │   ├── Home/                 # Home page structure
│   │   ├── Blog/                 # Blog page structure
│   │   ├── Itinerarios/          # Itineraries page structure
│   │   └── ...                   # Other page structures
│   │
│   ├── lib/                      # 🔧 Helper functions and data
│   │   ├── itinerariesData.ts    # Data about all itineraries
│   │   ├── blogData.ts           # Data about all blog posts
│   │   ├── bestSellersData.ts    # Data about featured items
│   │   └── utils.ts              # Utility functions
│   │
│   ├── Componentes/              # 📦 Special utilities
│   │   └── utils/                # Custom features like cursor, buttons
│   │
│   └── assets/                   # 🖼️ Images, videos, and other media
│       ├── Portadas/             # Large banner images
│       ├── Itinerarios/          # Images for itineraries
│       ├── videos/               # Video files
│       └── ...                   # Other media
│
├── public/                       # 📂 Files accessible to everyone
│   ├── assets/                   # Images, CSS, data files
│   └── ...
│
├── package.json                  # 📋 List of tools we're using
├── next.config.ts               # ⚙️ Next.js configuration
├── tailwind.config.ts           # 🎨 Tailwind CSS configuration
├── tsconfig.json                # 📝 TypeScript configuration
└── netlify.toml                 # 🚀 Deployment configuration
```

---

## Getting Started

### Installation

**Step 1: Install Node.js**
Download and install Node.js from [nodejs.org](https://nodejs.org). This gives us the tools we need to run the project.

**Step 2: Navigate to Project**

```bash
cd path/to/nextjs_barrancas_premium
```

**Step 3: Install Dependencies**

```bash
npm install
```

This downloads all the tools and libraries the project needs.

### Running the Website Locally

```bash
npm run ddev
```

This starts a local server. Open your browser and go to `http://localhost:3000` to see the website.

### Building for Production

```bash
npm run build
```

This optimizes everything for real users.

---

## Key Features

### 1. **Multi-Page Website**

The website has different pages, each accessible through a different URL:

- **Home (`/`)** - Landing page with animations
- **Itinerarios (`/itinerarios`)** - Shows all available travel packages
- **Blog (`/blog`)** - Articles and travel tips
- **Contacto (`/contacto`)** - Contact form for bookings
- **Nosotros (`/nosotros`)** - About the company

### 2. **Contact Form with Validation**

The contact form:

- ✅ Checks that all required fields are filled
- ✅ Validates email addresses
- ✅ Validates phone numbers
- ✅ Protects against spam (reCAPTCHA)
- ✅ Sends data to your email
- ✅ Redirects to thank you page on success
- ✅ Shows error messages if something goes wrong

### 3. **Smooth Animations**

GSAP (a professional animation library) powers smooth effects:

- Text characters fade in one by one
- Cards slide and transform
- Scroll-triggered animations
- Hover effects

### 4. **Dark Mode**

Users can click a button to switch between light and dark themes. This setting is saved.

### 5. **Responsive Design**

The website automatically adjusts to different screen sizes:

- 📱 Mobile phones (small screens)
- 📱 Tablets (medium screens)
- 🖥️ Desktop computers (large screens)

### 6. **Image Optimization**

Next.js automatically:

- Compresses images
- Serves them in modern formats
- Loads them lazily (only when needed)

---

## How the Website Works

### The Flow of a Page

1. **User visits URL** (e.g., `https://example.com/itinerarios`)
2. **Next.js finds the page** (looks in `src/app/itinerarios/page.tsx`)
3. **Page component loads** and fetches any needed data
4. **HTML is created** from React components
5. **Styles are applied** (Tailwind CSS + any custom CSS)
6. **Animations initialize** (GSAP sets up effects)
7. **User sees the page** and can interact with it

### Component Hierarchy

Components are nested like Russian dolls:

```
Layout (wraps all pages)
  ├── Navbar (navigation)
  ├── Hero Section (main banner)
  ├── Content Sections (made of smaller components)
  │   ├── Cards
  │   ├── Buttons
  │   └── Text
  └── Footer
```

---

## Components Guide

### Understanding Components

A **component** is a reusable piece of the website. Think of it like a recipe - you can use the same recipe to make cookies multiple times, just with different ingredients.

### Popular Components

#### **HeroSection** (`src/components/HeroSection.tsx`)

A large banner at the top of pages with:

- Background image
- Large title text
- Subtitle
- Call-to-action buttons

```tsx
// Example usage:
<HeroSection
  title="Explore the Canyons"
  subtitle="Discover amazing experiences"
  backgroundImage={image}
/>
```

#### **StarBorder** (`src/components/StarBorder.tsx`)

A button component with decorative star borders.

```tsx
// Example usage:
<StarBorder link="/itinerarios">Explore Now</StarBorder>
```

#### **Carousel** (`src/components/Carousel.tsx`)

A sliding carousel that shows items one at a time.

```tsx
// Example usage:
<Carousel items={itineraries} autoplay={true} duration={5} />
```

#### **Faqs** (`src/components/Faqs.tsx`)

Expandable question/answer sections.

```tsx
// Example usage:
<Faqs questions={[{ q: "What's included?", a: "Everything!" }]} />
```

#### **BestSellersCards** (`src/components-gsap/BestSellersCards.tsx`)

Horizontal scrolling cards showing featured items.

**Key Features:**

- Drag to scroll on desktop
- Navigation buttons (arrows)
- Smooth animations
- Accepts custom data

```tsx
// Example usage:
<BestSellersCards
  cards={itineraryCards}
  title="Our Best Itineraries"
  subtitle="Hand-picked experiences"
/>
```

---

## Pages Guide

### Home Page (`src/app/page.tsx`)

**What it shows:**

- Animated hero section
- Company highlights
- Featured itineraries
- Testimonials
- FAQ section

**Key sections:**

- `TopHero` - Animated introduction
- `SecondSection` - Company features
- `BestSellersCards` - Featured items
- `About` - Company info
- `Clientes` - Customer testimonials

### Itinerarios Page (`src/app/itinerarios/page.tsx`)

**What it shows:**

- List of all available travel packages
- Filterable grid of itineraries
- Detailed descriptions
- Images and pricing

**How it works:**

1. Gets all itineraries from data
2. Converts them to card format
3. Passes to `GridFilter` component
4. Users can filter and view details

### Blog Page (`src/app/blog/page.tsx`)

**What it shows:**

- Travel articles and tips
- Blog post previews
- Author information
- Read time estimates

### Contact Page (`src/app/contacto/page.tsx`)

**What it shows:**

- Contact form with fields:
  - Name
  - Last name
  - Region/Country
  - Phone
  - Email
  - Travel date (calendar picker)
  - Comments
  - reCAPTCHA verification

**What happens on submit:**

1. Form validates all fields
2. Checks reCAPTCHA
3. Sends email with data
4. Redirects to thank you page
5. If error, shows error message

### Thank You Page (`src/app/gracias/page.tsx`)

**What it shows:**

- Success message
- Confirmation text
- Countdown to redirect
- Manual redirect button

**Auto-redirects to home after 8 seconds**

### 404 Not Found Page (`src/app/not-found.tsx`)

**What it shows:**

- "404" error message
- Friendly explanation
- Buttons to go back or home

**Automatically shown when:**

- User visits non-existent URL
- Page doesn't exist

---

## Formulario
**Formulario description:**

```typescript
interface FormData {
  nombre: string; // First name
  apellido: string; // Last name
  pais: string; // Country code
  telefono: string; // Phone number
  email: string; // Email address
  fecha: string; // Travel date
  comentarios: string; // Additional comments
}
```

## File Naming Conventions

### TypeScript/React Files

- Use `PascalCase` for component files: `HomePage.tsx`, `ContactForm.tsx`
- Use `camelCase` for regular functions: `utils.ts`, `helpers.ts`

### CSS Files

- Use `kebab-case`: `global-styles.css`, `form-styles.css`

### Data Files

- Use `camelCase`: `itinerariesData.ts`, `bestSellersData.ts`

### Folders

- Use `kebab-case`: `src/components-gsap/`, `src/lib/`

---

## Summary

This website is built with modern tools:

- **Next.js** for the framework
- **React** for components
- **Tailwind CSS** for styling
- **GSAP** for animations
- **TypeScript** for type safety

The architecture is organized into:

- **Pages** (what users visit)
- **Components** (reusable pieces)
- **Sections** (groups of components)
- **Data** (itineraries, blog posts)
- **Utilities** (helper functions)

Key features:

- ✅ Fast and responsive
- ✅ Beautiful animations
- ✅ Dark mode support
- ✅ Form validation
- ✅ Email integration
- ✅ Easy to update and maintain

---

**Last Updated:** December 23, 2025
**Version:** 1.0.0
