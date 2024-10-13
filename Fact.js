import React, { useState, useEffect } from 'react';

function Fact({ fact, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState('');
  const [factText, setFactText] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (fact) {
      setQuestion(fact.question);
      setFactText(fact.fact);
      setTags(fact.tags.join(', '));
    }
  }, [fact]);

  const handleSave = () => {
    const tagArray = tags.split(',').map(tag => tag.trim());
    const newFact = { id: fact ? fact.id : Date.now(), question, fact: factText, tags: tagArray };
    onSave(newFact);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (fact) {
      setQuestion(fact.question);
      setFactText(fact.fact);
      setTags(fact.tags.join(', '));
    }
  };

  return (
    <div className="fact">
      {isEditing ? (
        <div>
          <input 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            placeholder="Question" 
          />
          <input 
            value={factText} 
            onChange={(e) => setFactText(e.target.value)} 
            placeholder="Fact" 
          />
          <input 
            value={tags} 
            onChange={(e) => setTags(e.target.value)} 
            placeholder="Tags (comma-separated)" 
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{fact.question}</h3>
          <p>{fact.fact}</p>
          <p>Tags: {fact.tags.join(', ')}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(fact.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Fact;
