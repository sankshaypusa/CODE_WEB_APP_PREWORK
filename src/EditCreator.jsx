import React, { useState } from 'react';

const EditCreator = ({ creator, updateCreator, onCancel }) => {
  const [name, setName] = useState(creator.name);
  const [description, setDescription] = useState(creator.description);
  const [image, setImage] = useState(creator.image);
  const [instagram, setInstagram] = useState(creator.instagram);
  const [twitter, setTwitter] = useState(creator.twitter);
  const [youtube, setYoutube] = useState(creator.youtube);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCreator({ ...creator, name, description, image, instagram, twitter, youtube });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Creator</h2>
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
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditCreator;
