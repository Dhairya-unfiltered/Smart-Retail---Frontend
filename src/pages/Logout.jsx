import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the JWT token from local storage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;
