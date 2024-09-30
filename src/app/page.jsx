"use client"; // This indicates a Client Component
import { useRouter } from 'next/navigation'; // Import useRouter

export default function HomePage() {
  const router = useRouter(); // Initialize useRouter

  const handleLoginClick = () => {
    router.push('/Login'); // Navigate to the login page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #d0e7ff, #a68dbb)', // Faded blue to purple background
        padding: '20px',
      }}
    >
      <h1
        style={{
          color: '#007bff', // Blue color for the title
          fontSize: '50px',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Welcome to My First Next.js Project
      </h1>
      <p
        style={{
          color: '#333',
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        This is the home page. Click below to log in.
      </p>
      <button
        onClick={handleLoginClick}
        style={{
          padding: '12px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '18px',
          marginTop: '20px',
          transition: 'background-color 0.3s',
        }}
      >
        Go to Login
      </button>
    </div>
  );
}
