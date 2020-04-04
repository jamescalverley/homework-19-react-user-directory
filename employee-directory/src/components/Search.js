import React, {useState} from 'react';
import '../css/Component-style.css';
import Table from './Table';

function Search() {
  const [ searchValue, setSearchValue ] = useState([]);
  

  function handleInputChange( event ){
    const input = event.target.value;
    console.log('[search input]', input)
    setSearchValue( input );
    displayTable();
  };

  function displayTable(){
    console.log(">>>filter by:", searchValue )
  }

  function handleSearch(){
    console.log('[SEARCH VALUE]', searchValue)
  };

  return (
    //! use <form onSubmit={}> </form> rather than button on click. Will now work with enter
    <>
    <form>
      <div class="input-group">
          <input onChange={handleInputChange} value={searchValue} type="text" class="form-control form-control-lg" placeholder="Search for an employee"/>
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
         <Table />
       </tbody>
     </table>
   </div>
   </>
  );
};

export default Search;