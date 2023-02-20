import React, {useState, useEffect} from 'react';
import { deleteRoutine, fetchUserRoutines, attachActivityToRoutine, removeActivityFromRoutine } from '../api';
import EditRoutine from './EditRoutine';




const MyRoutines = ({user, myRoutines, setMyRoutines, activities , routines}) => {
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activity, setActivity] = useState(null)
    console.log(activity)
    
    
    const getMyRoutines = async() => {
        const routines = await fetchUserRoutines(user.username)
        setMyRoutines(routines)
    }
    
    const handleDelete = async (ev, routineId) => {
        ev.preventDefault();
        const delRoutine = await deleteRoutine(routineId)
        console.log(delRoutine)
        getMyRoutines();
    }

    const handleAttachActivity = async ({routineId, activity: activityId, count, duration}) => {
       await attachActivityToRoutine({routineId, activityId, count, duration });
       getMyRoutines(); 
    }

    const handleDeleteActivity = async (activityId) => {
        await removeActivityFromRoutine(activityId);
        getMyRoutines();
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
          <hr></hr>
          <ul>
            {myRoutines.map( (routine) => {
                return(
                    <div className="routDiv" key={routine.id}>
                        <h3>Routine: {routine.name}</h3>
                        <p className="indent">Goal: {routine.goal}</p>
                        <EditRoutine getMyRoutines={getMyRoutines} routineId={routine.id}/>
                        <button onClick={(ev)=> handleDelete(ev, routine.id)}>Delete</button>
                        <form>
                            <select onChange={(ev)=> setActivity(ev.target.value)}>
                                {
                                    activities.map((activity) => {
                                        return (<option key={activity.id} value={activity.id}>{activity.name}</option>)
                                    })
                                }
                            </select>
                            <input name="count" value={count} onChange={(ev) => setCount(ev.target.value)}/>
                            <input name="duration" value={duration} onChange={(ev) => setDuration(ev.target.value)}/>
                        </form>
                        <button onClick={(ev)=> {
                            ev.preventDefault();
                            handleAttachActivity({routineId: routine.id, count, duration, activity})
                            }}>Add Activity</button>
                       
                       
                        {routine.activities.map( (activity) => {
                            return(<div key={activity.id}>
                                <p className="indent">activities:{activity.name}</p>
                                <p className="doubleInd">{activity.description}</p>
                                <p className="doubleInd">{activity.duration}</p>
                                <p className="doubleInd">{activity.count}</p>
                                <button onClick={()=>handleDeleteActivity(activity.routineActivityId)}>Remove Activity</button>
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