import React, {useState} from 'react';


const Routines = (props) => {
    const routines = props.routines
    //console.log(routines)

    return(
      <div>
          <h1>
              Routines ({routines.length})
          </h1>
          <hr></hr>
          <ul>
            {routines.map( (routine) => {
                return(
                    <div className="routDiv" key={routine.id}>
                        <h3>Routine: {routine.name}</h3>
                        <p className="indent">Goal: {routine.goal}</p>
                        <p className="indent"> By: {routine.creatorName}</p>
                       
                       
                        {routine.activities.map( (activity) => {
                            return(<div className="actDiv" key={activity.id}>
                                <h4 className="indent">Activity: {activity.name}</h4>
                                <p className="doubleInd">Description: {activity.description}</p>
                                <p className="doubleInd">Count: {activity.count}</p>
                                <p className="doubleInd">Duration: {activity.duration}</p>
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