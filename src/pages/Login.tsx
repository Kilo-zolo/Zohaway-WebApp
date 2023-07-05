import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitButtonStyle, formStyle, headerStyle, inputGroupStyle, labelStyle, inputStyle } from './Checkout';

export function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
    const navigate = useNavigate();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault(); 

        const {email, password } = formData;

        if (!email || !password) {
            console.log('Email and Password required')
            return;
        }
        setFormData({
            email: '',
            password: ''
          });

        navigate('/')
    }

    return(
        <form onSubmit={handleSubmit} style={formStyle}>
            <h1 style={headerStyle}>Login</h1>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Email:</label>
                <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                style={inputStyle}
                />
            </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>Login</button>
        </form>
    );
}