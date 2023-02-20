import React, {useState} from 'react';
import { editActivity } from '../api';


const EditActivity = (props) => {
    const token = window.localStorage.getItem('token');
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState('');
    const getMyRoutines = props.getMyRoutines
    const activityId = props.activityId

    const handlesubmit = async ({token, count, duration, activityId}) => {
        await editActivity({token, count, duration, activityId})
        getMyRoutines();
    }

    return(
        <div>
            <input
            placeholder='Duration'
            value={duration}
            onChange={(ev)=> setDuration(ev.target.value)}
            />
            <input
            placeholder='Count'
            value={count}
            onChange={(ev)=> setCount(ev.target.value)}
            />
            
           <button onClick={() => {handlesubmit({token, count, duration, activityId})}}>Edit Activity</button> 
        </div>
    )
}

export default EditActivity;