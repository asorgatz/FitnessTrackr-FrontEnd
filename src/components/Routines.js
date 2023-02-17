import React, {useState} from 'react';


const Routines = (props) => {
    const routines = props.routines
    //console.log(routines)

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
                       
                       
                        {routine.activities.map( (activity) => {
                            return(<div key={activity.id}>
                                <p className="indent">activities:{activity.name}</p>
                                <p className="indent">{activity.description}</p>
                                <p className="indent">{activity.duration}</p>
                                <p className="indent">{activity.count}</p>
                                </div>
                            )
                        } 
                      

                        )}
                    </div>
                );
            })}
            </ul>  
          
      </div>
    )
}

export default Routines