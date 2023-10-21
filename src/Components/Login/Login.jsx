import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
    return ( 
    <div className='head' >
        <div className="form-container">
        <div className="form-section image-section">
        <h1 className='log'>Login Here</h1>
        </div>
        <div className="form-section input-section">
            <form>
            
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <div className="button-container">
            <Link to="/SignUpNew">
              <button type="submit">Sign Up</button>
            </Link>
            <Link to="/Detail">
            <button type="button">Login</button>
            </Link>
            
            
          </div>
            </form>
        </div>
    </div>
    </div>
    
);
   
};
  