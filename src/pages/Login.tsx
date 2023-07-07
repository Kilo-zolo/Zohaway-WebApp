import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitButtonStyle, formStyle, headerStyle, inputGroupStyle, labelStyle, inputStyle, messageStyle } from './Checkout';
import { UserLoginType, UserLogin } from '../components/UserLogin';


export function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        hiddenMessage: ''
      });

    const navigate = useNavigate();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault(); 

        const {email, password } = formData;

        const User: UserLoginType = {
          email: email,
          password: password
        }
        var message = ''
        // Invoke the placeholder function with the form data
        let response = await UserLogin(User);
          if (JSON.parse(response).length > 0 ){
            localStorage.setItem("userData", response);
            navigate('/')
            window.location.reload()
          } else {
           message = "Invalid Email and/or Password, please try again.";
          }
        
          setFormData(prevState => ({
            ...prevState,
            password: '',
            hiddenMessage: message,
          }));
      
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
          {formData.hiddenMessage.length > 0 ? (<p style={messageStyle}>{formData.hiddenMessage}</p>): null}
        </form>
    );
}
