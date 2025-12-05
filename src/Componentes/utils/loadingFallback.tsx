'use client';

import { SyncLoader } from "react-spinners";

const LoadingFallback = () => {
  const loading = true;
  const color = "#d4af37"; // Gold color to match the theme

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="app-loading" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontSize: '18px',
      fontFamily: 'nohemi, system-ui, -apple-system, sans-serif',
      color: '#333',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        textAlign: 'center'
      }}>
        <div style={{
          marginBottom: '24px',
          fontSize: '32px'
        }}>
          
        </div>
        
        <SyncLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={15}
          data-testid="app-loader"
        />
        
        <div style={{
          marginTop: '20px',
          fontSize: '16px',
          color: '#666'
        }}>
          
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback;

