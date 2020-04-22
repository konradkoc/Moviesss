import React from 'react';
import './App.css';
import Header from './components/Header/Header.component'
import PageFromSearch from './pages/PageFromSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <PageFromSearch />
    </div>
  );
}

export default App;
