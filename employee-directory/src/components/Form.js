import React from 'react';

function Form() {
  return (
    <>
      <form>
        <div class="input-group">
            <input type="text" class="form-control form-control-lg" placeholder="Search for an employee"/>
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">Search</button>
            </div>
        </div>
      </form> 
    </>
  );
};

export default Form;