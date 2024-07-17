// src/MainPage.jsx
import React from 'react';

const MainPage = ({ onShowCreators }) => {
  return (
    <div className="main-page">
      <img src="file:///Users/sankshay/Downloads/meet%20the%20team-4.png" alt="Website" className="main-image" />
      <h1>Welcome to Our Content Creator Platform</h1>
      <button onClick={onShowCreators}>Show Creators</button>
    </div>
  );
};

export default MainPage;
