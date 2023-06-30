import React, { useState } from 'react';
import {total_amount} from "../components/ShoppingCart";
import { formatCurrency } from "../utilities/formatCurrency";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  registerForMembership: boolean;
  email?: string;
  password?: string;
  paymentPreference?: string;
  creditCardNumber?: string;
  creditCardHolderName?: string;
  cvc?: string;
  expiryDate?: string;
}

class CheckoutForm {
  formData: FormData;

  constructor() {
    this.formData = {
      firstName: '',
      lastName: '',
      phone: '',
      registerForMembership: false,
    };
  }

  handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.firstName = event.target.value;
  }

  handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.lastName = event.target.value;
  }

  handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.phone = event.target.value;
  }

  handleMembershipChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.registerForMembership = event.target.value === 'yes';
  }

  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.email = event.target.value;
  }

  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.password = event.target.value;
  }

  handlePaymentPreferenceChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.paymentPreference = event.target.value;
  }

  handleCreditCardNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.creditCardNumber = event.target.value;
  }

  handleCreditCardHolderNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.creditCardHolderName = event.target.value;
  }

  handleCvcChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.cvc = event.target.value;
  }

  handleExpiryDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.formData.expiryDate = event.target.value;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Perform form submission or further processing with the form data
    console.log(this.formData);
  }
}

export function Checkout() {
  const checkoutForm = new CheckoutForm();
  const [showMembershipFields, setShowMembershipFields] = useState(false);
  const [showCreditCardFields, setShowCreditCardFields] = useState(false);

  const handleMembershipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === 'yes';
    setShowMembershipFields(value);
    checkoutForm.handleMembershipChange(event);
  };

  const handlePaymentPreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === 'creditCard';
    setShowCreditCardFields(value);
    checkoutForm.handlePaymentPreferenceChange(event);
  };

  return (
    <form onSubmit={(event) => checkoutForm.handleSubmit(event)} style={formStyle}>
      <h1 style={headerStyle}>Checkout</h1>
      <h2 style={labelStyle}>Your Total is: {formatCurrency(total_amount)}</h2>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>First Name:</label>
        <input
          type="text"
          required
          onChange={(event) => checkoutForm.handleFirstNameChange(event)}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Last Name:</label>
        <input
          type="text"
          onChange={(event) => checkoutForm.handleLastNameChange(event)}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Phone:</label>
        <input
          type="text"
          required
          onChange={(event) => checkoutForm.handlePhoneChange(event)}
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Register for Membership:</label>
        <div style={radioContainerStyle}>
          <input
            type="radio"
            name="membership"
            value="yes"
            onChange={handleMembershipChange}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>Yes</span>
          <input
            type="radio"
            name="membership"
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
              required
              onChange={(event) => checkoutForm.handleEmailChange(event)}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              required
              onChange={(event) => checkoutForm.handlePasswordChange(event)}
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
            value="cash"
            onChange={handlePaymentPreferenceChange}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>Cash</span>
          <input
            type="radio"
            name="paymentPreference"
            value="creditCard"
            onChange={handlePaymentPreferenceChange}
            style={radioStyle}
          />
          <span style={radioLabelStyle}>Credit Card</span>
        </div>
      </div>
      {showCreditCardFields && (
        <>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Credit Card Number:</label>
            <input
              type="text"
              required
              onChange={(event) => checkoutForm.handleCreditCardNumberChange(event)}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Credit Card Holder Name:</label>
            <input
              type="text"
              required
              onChange={(event) => checkoutForm.handleCreditCardHolderNameChange(event)}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>CVC:</label>
            <input
              type="text"
              required
              onChange={(event) => checkoutForm.handleCvcChange(event)}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Expiry Date:</label>
            <input
              type="text"
              required
              onChange={(event) => checkoutForm.handleExpiryDateChange(event)}
              style={inputStyle}
            />
          </div>
        </>
      )}
      <div style={inputGroupStyle}>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </div>
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
