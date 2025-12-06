'use client';

import React from 'react';

const OrientationWarning: React.FC = () => {
    return (
        <div className="orientation-warning">
            <div className="orientation-warning-content">
                {/* Rotate Phone Icon */}
                <svg
                    className="rotate-icon"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 18H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 8L20 12L16 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20 12H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <h2 className="orientation-warning-title">
                    Por favor, rota tu dispositivo
                </h2>
                <p className="orientation-warning-text">
                    Esta página está optimizada para verse en modo vertical
                </p>
            </div>
        </div>
    );
};

export default OrientationWarning;
