import React, { useState } from 'react';

function Manager({ tags, onTagAdd, onTagRemove, onTagSearch }) {
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim()) {
      onTagAdd(newTag);
      setNewTag('');
    }
  };

  return (
    <div>
      <input 
        value={newTag} 
        onChange={(e) => setNewTag(e.target.value)} 
        placeholder="New Tag" 
      />
      <button onClick={handleAddTag}>Add Tag</button>
      <div>
        {tags.map(tag => (
          <span key={tag}>
            {tag} <button onClick={() => onTagRemove(tag)}>Remove</button>
          </span>
        ))}
      </div>
      <button onClick={() => onTagSearch(newTag)}>Search by Tag</button>
    </div>
  );
}

export default Manager;
