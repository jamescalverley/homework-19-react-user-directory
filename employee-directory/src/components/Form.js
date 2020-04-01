import React, {useState} from 'react';
import '../css/Component-style.css';

function Form() {
  const [ searchValue, setSearchValue ] = useState([]);
  

  function handleInputChange( event ){
    const input = event.target.value;
    console.log('[search input]', input)
    setSearchValue( input );
  };

  function handleSearch(){
    console.log('[SEARCH VALUE]', searchValue)
  };

  
  
  
  return (
    
    <form>
      <div class="input-group">
          <input onChange={handleInputChange} value={searchValue} type="text" class="form-control form-control-lg" placeholder="Search for an employee"/>
          <div class="input-group-append">
              <button onClick={ ()=> {handleSearch()}} class="btn btn-outline-primary" type="button">Search</button>
          </div>
      </div>
    </form> 
    
  );
};

export default Form;