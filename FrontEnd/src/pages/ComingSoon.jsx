import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ComingSoon() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage after 5 seconds (5000 milliseconds)
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Content Coming Soon</h1>
      <p>Redirecting to the homepage in 5 seconds...</p>
    </div>
  );
}

export default ComingSoon;
