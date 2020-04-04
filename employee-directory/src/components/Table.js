import React, {useState, useEffect}from 'react';
import '../css/Component-style.css';

function Table( props ){

  const [ users, setUsers ] = useState([]);
 
  
  useEffect(() => {
    getApiData();
    console.log("[USERS]", users)
  }, [])

  async function getApiData(){
    const apiResult = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    
    console.log('API CALL >>> ', apiResult);

    setUsers( apiResult ) 
  }

  return (
        <>
          { users.map( user => 
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )}
        </>
  );
};

export default Table;