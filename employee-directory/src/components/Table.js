import React from 'react';
import '../css/Component-style.css';

function Table(){
  return (
    <div class="table-wrapper">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Justin Trudeau</td>
            <td>justin@gmail.com</td>
            <td>555-123-4567</td>
            <td>HR</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob Thornton</td>
            <td>jacob@gmail.com</td>
            <td>555-123-4567</td>
            <td>Accounting</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mike Babcock</td>
            <td>babs@gmail.com</td>
            <td>055-888-4567</td>
            <td>Management</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Barrack Obama</td>
            <td>obama@gmail.com</td>
            <td>800-808-1111</td>
            <td>Operations</td>
          </tr>
          <tr>
            <th scope="row">5o</th>
            <td>Julia Childs</td>
            <td>julia@gmail.com</td>
            <td>444-555-1111</td>
            <td>HR</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  
  );
};

export default Table;