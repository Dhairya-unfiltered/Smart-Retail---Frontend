import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Register from './pages/Register'; 
import Login from './pages/Login'; 

import NotFound from './pages/NotFound';
import './App.css'
import Logout from './pages/Logout';

function App() {
  const [count, setCount] = useState(0)

  return (
    
<div> 
    <nav> 
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/logout">Logout</Link>
    </nav> 
   <Routes> 
     <Route path="/" element={<Home />} /> 
     <Route path="/about" element={<About />} /> 
     <Route path="/register" element={<Register />} /> 
     <Route path="/login" element={<Login />} />
     <Route path="/logout" element={<Logout />} /> 
     <Route path="*" element={<NotFound />} /> 
   </Routes>
 </div>

  )
}

export default App
