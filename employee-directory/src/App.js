import React from 'react';
import './css/App.css';
import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <>
      <Header />
      <EmployeeDirectory />
    </>
  );
}

export default App;
