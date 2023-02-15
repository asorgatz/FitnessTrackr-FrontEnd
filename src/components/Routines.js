import React, {useState} from 'react';


const Routines = (props) => {
    const routines = props.routines

    return(
      <div>
          <h1>
              Routines ({routines.length})
          </h1>
          
      </div>
    )
}

export default Routines