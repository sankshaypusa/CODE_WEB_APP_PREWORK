// src/ShowCreators.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ShowCreators = ({ creators, onEdit, onView, onDelete }) => {
  return (
    <div className="container">
      <h2>All Content Creators</h2>
      <div className="creator-grid">
        {creators.map((creator, index) => (
          <div key={index} className="creator-item">
            <img src={creator.image} alt={creator.name} />
            <h3>{creator.name}</h3>
            <p>{creator.description}</p>
            <div className="social-icons">
              <a href={creator.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={creator.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <button onClick={() => onView(index)}>View Profile</button>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
