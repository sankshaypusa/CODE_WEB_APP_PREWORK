import React, { useState } from 'react';

const AddCreator = ({ addCreator, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCreator({ name, description, image, instagram, twitter, youtube });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Creator</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Instagram URL"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />
      <input
        type="text"
        placeholder="Twitter URL"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <input
        type="text"
        placeholder="YouTube URL"
        value={youtube}
        onChange={(e) => setYoutube(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AddCreator;
