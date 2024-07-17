// src/components/AddCreator.jsx
import React, { useState } from 'react';

const AddCreator = ({ addCreator, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCreator({
      name,
      description,
      url,
      image,
      instagram,
      twitter,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Creator</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
      <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <input type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram URL" />
      <input type="url" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Twitter URL" />
      <button type="submit">Add Creator</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AddCreator;
