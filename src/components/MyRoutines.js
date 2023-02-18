import React, {useState, useEffect} from 'react';
import { deleteRoutine, fetchUserRoutines } from '../api';




const MyRoutines = ({user, myRoutines, setMyRoutines}) => {
    
    const getMyRoutines = async() => {
        const routines = await fetchUserRoutines(user.username)
        setMyRoutines(routines)
    } 
    
    useEffect(() => {
        if(user.username){
            getMyRoutines()
        }
    }, [user])

    return(
      <div>
          <h1>
              My Routines ({myRoutines.length})
          </h1>
          <ul>
            {myRoutines.map( (routine) => {
                return(
                    <div key={routine.id}>
                        <h3>{routine.name}</h3>
                        <p className="indent">{routine.goal}</p>
                        <p className="indent"> By: {routine.creatorName}</p>
                        <button onClick={()=> deleteRoutine(routine.id)}>Delete</button>
                       
                       
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

export default MyRoutines