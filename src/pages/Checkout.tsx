import React, { useState } from 'react';
import { getAmount } from "../components/ShoppingCart";
import { formatCurrency } from "../utilities/formatCurrency";
import { OrderUserType, placeOrder } from '../components/OrderPlace';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';


export function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    registerForMembership: false,
    paymentPreference: 'Cash', 
    email: '',
    password: '',
    creditCardNumber: 0,
    creditCardHolderName: '',
    cvc: 0,
    expiryDate: '',
    hiddenMessage: '',
    order_amount: 0
  });
  const [showMembershipFields, setShowMembershipFields] = useState(false);
  const [showCreditCardFields, setShowCreditCardFields] = useState(false);
  const { cartItems, resetCart } = useShoppingCart(); // Access cartItems directly from the context
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'registerForMembership' ? value === 'yes' : value,
    }));
  };

  const handleMembershipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === 'yes';
    setShowMembershipFields(value);
    handleChange(event);
  };

  const handlePaymentPreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === 'creditCard';
    setShowCreditCardFields(value);
    handleChange(event);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const { firstName, lastName, phone, email, password, registerForMembership } = formData;
 
    const orderUser: OrderUserType = {
      ID: "",
      first: firstName,
      last: lastName,
      pnum: parseInt(phone),
      email: email || '',
      pass: password || '',
      member: Number(registerForMembership),
    };

    formData.order_amount = getAmount();
    var message = "Congratulations on your order! Hurry up and grab your delicious food within the next 30 minutes, or it might mysteriously transform into a pumpkin spice latte. Bon appétit!";

    if(registerForMembership && formData.order_amount > 0)
    {
      formData.order_amount = formData.order_amount - (formData.order_amount * 0.05);  
      message = message + " As a member you have scored an additional 5% discount. Yes we are generous!"
    }

    if( formData.paymentPreference == 'creditCard' && formData.order_amount > 0)
    {
      formData.order_amount = formData.order_amount + (formData.order_amount * 0.0175);  
    }

    // Invoke the placeOrder function with the form data
    placeOrder(formData.order_amount, orderUser, cartItems);
    
    if (formData.order_amount == 0)
    {
      message = "We dont want to charge you for nothing! How about you add some of that delectable food to your order."
    }

    setFormData(prevState => ({
      ...prevState,
      hiddenMessage: message,
    }));

    localStorage.clear();
    //cartItems.splice(0);
    resetCart();
  };

  if (formData.hiddenMessage)
  {
    return(
      <form style={formStyle}>
      <h1 style={headerStyle}>Checkout Complete</h1>
      <h2 style={labelStyle}>Amount Charged: {formatCurrency(formData.order_amount)}</h2>        
      <p style={messageStyle}>{formData.hiddenMessage}</p>
      <button type="submit" onClick={() => navigate('/')} style={submitButtonStyle}>Go Home</button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={headerStyle}>Checkout</h1>
      <h2 style={labelStyle}>Your Total is: {formatCurrency(getAmount())}</h2>
      <h3 style={labelStyle}>Be a member and get 5% off your order today!!</h3>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>First Name:</label>
        <input
          type="text"
          name="firstName"
          required
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Phone:</label>
        <input
          type="text"
          name="phone"
          required
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Register for Membership:</label>
        <div style={radioContainerStyle}>
          <input
            type="radio"
            name="registerForMembership"
            value="yes"
            onChange={handleMembershipChange}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>Yes</span>
          <input
            type="radio"
            name="registerForMembership"
            value="no"
            onChange={handleMembershipChange}
            checked={!showMembershipFields}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>No</span>
        </div>
      </div>
      {showMembershipFields && (
        <>
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
        </>
      )}
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Payment Preference:</label>
        <div style={radioContainerStyle}>
          <input
            type="radio"
            name="paymentPreference"
            value="Cash"
            onChange={handlePaymentPreferenceChange}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>Cash</span>
          <input
            type="radio"
            name="paymentPreference"
            value="creditCard"
            onChange={handlePaymentPreferenceChange}
            checked={showCreditCardFields}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>Credit Card inc. 1.75% processing fee</span>
        </div>
      </div>
      {showCreditCardFields && (
        <>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Credit Card Number:</label>
            <input
              type="tel"
              inputMode='numeric'
              pattern="[0-9\s]{13,19}"
              maxLength={19}
              placeholder='xxxx xxxx xxxx xxxx'
              name="creditCardNumber"
              required
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Credit Card Holder Name:</label>
            <input
              type="text"
              name="creditCardHolderName"
              required
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>CVC:</label>
            <input
              type="tel"
              inputMode='numeric'
              pattern="[0-9\s]{3,4}"
              minLength={3}
              maxLength={4}
              placeholder='xxxx'
              name="cvc"
              required
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Expiry Date:</label>
            <input
              type="tel"
              inputMode='numeric'
              pattern="(0[1-9]|1[0-2])\/\d{2}"
              maxLength={5}
              placeholder='MM/YY'
              name="expiryDate"
              required
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </>
      )}
      <button type="submit" style={submitButtonStyle}>Place Order</button>
    </form>
  );
}

// Styles
const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '1.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const inputGroupStyle: React.CSSProperties = {
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
};

const labelStyle: React.CSSProperties = {
  marginRight: '0.5rem',
  minWidth: '180px',
  fontSize: '1.1rem',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  flex: '1',
  fontSize: '1rem',
};

const radioContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const radioStyle: React.CSSProperties = {
  marginRight: '0.3rem',
};

const radioLabelStyle: React.CSSProperties = {
  marginRight: '1rem',
  fontSize: '0.9rem',
};

const submitButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
};

const messageStyle: React.CSSProperties = {
  marginTop: '1.5rem',
  textAlign: 'center',
  fontWeight: 'bold',
};