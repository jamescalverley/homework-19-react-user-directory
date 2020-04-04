import React, {useState, useEffect}  from 'react';
import '../css/Component-style.css';
import Table from './Table';

function Search() {
  const [ showUsers, setShowUsers ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ searchInput, setSearchInput ] = useState("");
  
  useEffect(() => {

    getApiData();
  }, [])

  function handleInputChange( event ){
    const input = event.target.value;
    console.log('[search input]', input)
    
    if( input.length > 0){
      console.log(">>>> filtering")
      let filteredUsers = allUsers.filter( user=> 
        user.name.toLowerCase().indexOf(input) !== -1  ||
        user.username.toLowerCase().indexOf(input) !== -1 ||
        user.email.toLowerCase().indexOf(input) !== -1 ||
        user.phone.replace(/[-]/,"").indexOf(input) !== -1)
      console.log("filteredUsers:", filteredUsers )
      setShowUsers([ ...filteredUsers] );
    } else {
      setShowUsers( allUsers )
    }
    
    setSearchInput( input );
  };

  async function getApiData(){
    const apiResult = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    
    console.log('API CALL >>> ', apiResult);

    setAllUsers( apiResult ) 
    setShowUsers( apiResult )

  }

  function handleSearch(){
    console.log('[SEARCH INPUT]', searchInput)
  };


  return (
    //! use <form onSubmit={}> </form> rather than button on click. Will now work with enter
    <>
    <form>
      <div class="input-group">
          <input onChange={handleInputChange} value={searchInput} type="text" class="form-control form-control-lg" placeholder="Search for an employee"/>
          <div class="input-group-append">
              <button onClick={ ()=> {handleSearch()}} class="btn btn-outline-primary" type="button">Search</button>
          </div>
      </div>
    </form> 
     <div class="table-wrapper">
     <table class="table">
       <thead class="thead-dark">
         <tr>
           <th scope="col">id</th>
           <th scope="col">Name</th>
           <th scope="col">username</th>
           <th scope="col">Email</th>
           <th scope="col">Phone#</th>
         </tr>
       </thead>
       <tbody>
         {/* <Table searchInput={searchInput} /> */}
         {/* { allUsers.map( user => 
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )} */}
          { showUsers.map( user => 
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )}
       </tbody>
     </table>
   </div>
   </>
  );
};

export default Search;