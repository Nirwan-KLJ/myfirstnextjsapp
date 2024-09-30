"use client"; // This indicates a Client Component
import { useRouter } from 'next/navigation'; // Import useRouter

export default function LoginPage() {
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission     
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Simple validation logic
    if (username && password) {
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
          // Navigate to the dashboard page after successful login
          router.push('/Dashboard');
        } else {
          const errorData = await res.json();
          alert(errorData.message); // Show error message from the API
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
        console.error(error);
      }
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <>
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
            marginBottom: '50px', // Increased space below the title
            textAlign: 'center',
          }}
        >
          My First Next.js Project
        </h1>
        <div
          style={{
            backgroundColor: 'white', // White background for the login section
            padding: '40px', // Increased padding for a spacious look
            borderRadius: '12px', // More rounded corners
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Deeper shadow for depth
            width: '400px', // Adjusted width for a better layout
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: '#007bff', // Blue color for the subheading
              fontSize: '36px',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '30px', // Space below the subheading
            }}
          >
            Login
          </h2>
          <form
            onSubmit={handleSubmit} // Add form submit handler
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%', // Full width of the container
              alignItems: 'flex-start', // Align items to the left
            }}
          >
            <label
              style={{
                marginBottom: '8px', // Space below the label
                color: '#333', // Dark color for the label
                fontWeight: 'bold', // Bold label for emphasis
              }}
            >
              Username
            </label>
            <input
              type="text"
              name="username" // Add name attribute to access the input value
              required
              style={{
                padding: '10px',
                marginBottom: '20px', // Space below the input
                border: '1px solid #ccc', // Light gray border
                borderRadius: '4px', // Rounded corners
                fontSize: '16px',
                transition: 'border-color 0.3s', // Smooth transition
                width: '100%', // Full width of the input
              }}
              onFocus={(e) => (e.target.style.borderColor = '#007bff')} // Change border color on focus
              onBlur={(e) => (e.target.style.borderColor = '#ccc')} // Revert border color
            />
            <label
              style={{
                marginBottom: '8px', // Space below the label
                color: '#333', // Dark color for the label
                fontWeight: 'bold', // Bold label for emphasis
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password" // Add name attribute to access the input value
              required
              style={{
                padding: '10px',
                marginBottom: '30px', // Space below the input
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
                transition: 'border-color 0.3s', // Smooth transition
                width: '100%', // Full width of the input
              }}
              onFocus={(e) => (e.target.style.borderColor = '#007bff')} // Change border color on focus
              onBlur={(e) => (e.target.style.borderColor = '#ccc')} // Revert border color
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <a href="/forgot-password" style={{ color: '#007bff', textDecoration: 'underline' }}>
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              style={{
                padding: '12px',
                backgroundColor: '#007bff', // Blue color for the button
                color: 'white', // White text color
                border: 'none', // No border
                borderRadius: '4px', // Rounded corners
                cursor: 'pointer', // Pointer cursor on hover
                textAlign: 'center',
                fontSize: '18px',
                transition: 'background-color 0.3s', // Smooth color change
                marginTop: '20px', // Space above the button
                width: '100%', // Full width of the button
              }}
              className="loginButton" // Class for styling
            >
              Login
            </button>
          </form>
          <div style={{ marginTop: '20px' }}>
            <span style={{ color: '#333' }}>
              Don't have an account?{' '}
              <a href="/create-account" style={{ color: '#007bff', textDecoration: 'underline' }}>
                Register
              </a>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .loginButton:hover {
          background-color: #0056b3; /* Darker blue when hovered */
        }
      `}</style>
    </>
  );
}
