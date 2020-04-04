// import React, {useState, useEffect}from 'react';
import React from 'react';
import '../css/Component-style.css';

function Table( props ){

  //const [ users, setUsers ] = useState([]);
  let input = props.searchValue;


  // useEffect(() => {
  //   getApiData();
  // }, [])

  // async function getApiData(){
  //   const apiResult = await fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json());
    
  //   console.log('API CALL >>> ', apiResult);

  //   setUsers( apiResult ) 
    
  // }
//! move all functionality to search component. Only pass to the table row component the user(s) that need to be displayed

  return (
        <>
          {/* { users.map( user => 
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )} */}
        </>
  );
};

export default Table;