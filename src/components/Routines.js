import React, {useState} from 'react';


const Routines = (props) => {
    const routines = props.routines

    return(
      <div>
          <h1>
              Routines ({routines.length})
          </h1>
          <ul>
            {routines.map( (routine) => {
                return(
                    <div key={routine.id}>
                        <h3>{routine.name}</h3>
                        <p className="indent">{routine.goal}</p>
                        <p className="indent"> By: {routine.creatorName}</p>
                    </div>
                );
            })}
            </ul>  
          
      </div>
    )
}

export default Routines