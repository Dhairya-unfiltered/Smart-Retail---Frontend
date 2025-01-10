import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          // Get the token from local storage
          const token = localStorage.getItem('authToken');
          
          if (!token) {
            // If no token found, redirect to login page
            navigate('/login');
            return;
          }
  
          // Set Authorization header for the request
          const response = await axios.get('http://localhost:3000/protected', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          // If the request is successful, proceed
          console.log(response.data);
        } catch (error) {
          // If there's an error (e.g., invalid token or no token), redirect to login
          console.log(error);
          navigate('/login');
        }
      };
  
      checkAuth();
    }, []);
  

  return (
    <div>
      Home Page
    </div>
  )
}

export default Home
