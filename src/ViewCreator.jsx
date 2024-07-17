// src/components/ViewCreator.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ViewCreator = ({ creator, onBack }) => {
  if (!creator) {
    return <p>Creator not found</p>;
  }

  return (
    <div className="creator-item">
      <img src={creator.image} alt={creator.name} />
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <p>URL: {creator.url}</p>
      <div className="social-icons">
        <a href={creator.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href={creator.twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default ViewCreator;
