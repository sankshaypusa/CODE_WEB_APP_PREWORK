import React, { useState, useEffect } from 'react';
import ShowCreators from './ShowCreators';
import ViewCreator from './ViewCreator';
import EditCreator from './EditCreator';
import AddCreator from './Addcreator';
import MainPage from './MainPage';
import './App.css';

const App = () => {
  const [creators, setCreators] = useState([]);
  const [currentView, setCurrentView] = useState('main');
  const [selectedCreatorIndex, setSelectedCreatorIndex] = useState(null);

  useEffect(() => {
    const storedCreators = JSON.parse(localStorage.getItem('creators') || '[]');
    setCreators(storedCreators);
  }, []);

  useEffect(() => {
    localStorage.setItem('creators', JSON.stringify(creators));
  }, [creators]);

  const addCreator = (creator) => {
    setCreators([...creators, creator]);
    setCurrentView('list');
  };

  const updateCreator = (index, updatedCreator) => {
    const updatedCreators = creators.map((creator, i) =>
      i === index ? updatedCreator : creator
    );
    setCreators(updatedCreators);
    setCurrentView('list');
  };

  const deleteCreator = (index) => {
    setCreators(creators.filter((_, i) => i !== index));
    setCurrentView('list');
  };

  const startEditingCreator = (index) => {
    setSelectedCreatorIndex(index);
    setCurrentView('edit');
  };

  const startViewingCreator = (index) => {
    setSelectedCreatorIndex(index);
    setCurrentView('view');
  };

  const goBack = () => {
    setCurrentView('list');
  };

  return (
    <div className="container">
      {currentView === 'main' && (
        <MainPage onShowCreators={() => setCurrentView('list')} />
      )}
      {currentView === 'list' && (
        <>
          <nav>
            <button onClick={() => setCurrentView('add')}>Add Creator</button>
          </nav>
          <ShowCreators
            creators={creators}
            onEdit={startEditingCreator}
            onView={startViewingCreator}
            onDelete={deleteCreator}
          />
        </>
      )}
      {currentView === 'add' && (
        <AddCreator addCreator={addCreator} onCancel={goBack} />
      )}
      {currentView === 'edit' && selectedCreatorIndex !== null && (
        <EditCreator
          creator={creators[selectedCreatorIndex]}
          updateCreator={(updatedCreator) => updateCreator(selectedCreatorIndex, updatedCreator)}
          onCancel={goBack}
        />
      )}
      {currentView === 'view' && selectedCreatorIndex !== null && (
        <ViewCreator creator={creators[selectedCreatorIndex]} onBack={goBack} />
      )}
    </div>
  );
};

export default App;
