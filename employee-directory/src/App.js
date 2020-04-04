import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Search from './components/Search';



function App() {
  return (
    <>
      <Header />
      <Search />
      
    </>
  );
}

//! nest table within form and then pass the searchValue into it
// pass down event.target.value

export default App;
