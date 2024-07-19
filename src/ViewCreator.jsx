import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ViewCreator = ({ creator, onBack }) => {
  return (
    <div>
      <h2>{creator.name}</h2>
      <img src={creator.image} alt={creator.name} />
      <p>{creator.description}</p>
      <div className="social-icons">
        <a href={creator.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={creator.twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={creator.youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default ViewCreator;
