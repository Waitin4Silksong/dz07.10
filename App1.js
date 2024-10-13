import React, { useState } from 'react';
import Fact from './Fact';
import Group from './Group';
import Manager from './Manager';
import './App1.css';
function App() {
  const [facts, setFacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [tags, setTags] = useState([]);

  const handleAddFact = (newFact) => {
    setFacts([...facts, { id: facts.length + 1, ...newFact }]);
  };

  const handleUpdateFact = (updatedFact) => {
    setFacts(facts.map(fact => fact.id === updatedFact.id ? updatedFact : fact));
  };

  const handleDeleteFact = (id) => {
    setFacts(facts.filter(fact => fact.id !== id));
  };

  const handleAddGroup = (newGroup) => {
    setGroups([...groups, { id: groups.length + 1, ...newGroup }]);
  };

  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSearchByTag = (tag) => {
    const filteredFacts = facts.filter(fact => fact.tags.includes(tag));
    console.log('Facts with tag:', filteredFacts);
  };

  return (
    <div>
      <h1>Flashcards</h1>

      <h2>Fact Cards</h2>
      {facts.map(fact => (
        <Fact
          key={fact.id}
          fact={fact}
          onSave={handleUpdateFact}
          onDelete={handleDeleteFact}
        />
      ))}

      <h2>Create New Fact</h2>
      <Fact onSave={handleAddFact} />

      <h2>Groups</h2>
      <Group onSave={handleAddGroup} />

      <h2>Tags</h2>
      <Manager
        tags={tags}
        onTagAdd={handleAddTag}
        onTagRemove={handleRemoveTag}
        onTagSearch={handleSearchByTag}
      />
    </div>
  );
}

export default App;
