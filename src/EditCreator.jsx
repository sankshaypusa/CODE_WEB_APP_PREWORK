// src/components/EditCreator.jsx
import React, { useState } from 'react';

const EditCreator = ({ creator, updateCreator, onCancel }) => {
  const [name, setName] = useState(creator.name);
  const [description, setDescription] = useState(creator.description);
  const [url, setUrl] = useState(creator.url);
  const [image, setImage] = useState(creator.image);
  const [instagram, setInstagram] = useState(creator.instagram);
  const [twitter, setTwitter] = useState(creator.twitter);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCreator({
      ...creator,
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
      <h2>Edit Creator</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
      <input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <input type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram URL" />
      <input type="url" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Twitter URL" />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditCreator;
