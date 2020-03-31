import React from 'react';
import Form from './Form';
import Table from './Table';
import '../css/Component-style.css';



function EmployeeDirectory(){
  return (
    <>
      <div class="form-container">
        <Form />
      </div> 
      <div class="table-container">
        <Table />
      </div>
    </>
  );
};


export default EmployeeDirectory; 