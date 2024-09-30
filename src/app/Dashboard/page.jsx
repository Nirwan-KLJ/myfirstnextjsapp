export default function DashboardPage() {
  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #d0e7ff, #a68dbb)', // Faded blue to purple background
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: '#007bff', // Blue color for the heading
          fontSize: '48px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
        }}
      >
        Welcome to the Dashboard
      </h1>
      <p
        style={{
          color: '#333', // Dark color for the text
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '40px',
        }}
      >
        You are successfully logged in!
      </p>
      <a
        href="/Login"
        style={{
          textDecoration: 'underline',
          color: '#ff4d4d', // Red color for logout link
          fontSize: '20px',
          
        }}
      >
        Logout
      </a>
    </div>
  );
}
