import React, { useEffect, FC } from 'react';

export const Home: FC = () => {
    useEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = originalOverflow;
        };
    }, []);

    const navigateToLink = () => {
        window.location.href = '/Menu';
    }

    return (
        <div style={containerStyle}>
          <div style={textContainerStyle}>
            <h1 style={headerStyle}>Zohaway Takeaway Services</h1>
            <h2 style={subHeaderStyle}>Helping you turn 'What's for dinner?' into 'Dinner's here!'</h2>
          </div>
          <img src="https://zohawaystorage.blob.core.windows.net/zohaway/Shrimp_One_hand_passing_on_a_take_away_parcel_from_a_restauraun_383e1fb4-27b0-4abc-bb31-79b417909d53.png" alt="Zohaway Takeaway Services" style={imageStyle} onClick={navigateToLink}/>
        </div>
    );
}

// Styles...

// Styles
const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    maxWidth: '80%',
    width: '100%',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
};

const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '2rem',
    zIndex: 1, // Increase zIndex value
};

const imageStyle: React.CSSProperties = {
    maxWidth: '100%', // Set max-width to 100%
    maxHeight: '60%',
    marginBottom: '1rem',
};

const headerStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0',
};

const subHeaderStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: '1rem',
};
