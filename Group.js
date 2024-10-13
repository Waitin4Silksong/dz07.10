import React, { useState } from 'react';

function Group({ onSave }) {
  const [groupName, setGroupName] = useState('');

  const handleSave = () => {
    onSave({ name: groupName });
    setGroupName('');
  };

  return (
    <div>
      <input 
        value={groupName} 
        onChange={(e) => setGroupName(e.target.value)} 
        placeholder="Group Name" 
      />
      <button onClick={handleSave}>Add Group</button>
    </div>
  );
}

export default Group;
