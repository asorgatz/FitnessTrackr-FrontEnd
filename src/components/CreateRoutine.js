import React, {useState} from "react";
import { createRoutine } from "../api";



const CreateRoutine = () => {
    const [activityId, setActivityId] = useState('')
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    return(

    <form className='createRoutine' onSubmit={ (ev) => createActivity(ev, activityId, count, duration) }>
    <h3>Create Your Routines</h3>
                <input 
                    placeholder='activityId'
                    value={ activityId } 
                    onChange={ ev => setActivityId(ev.target.value)} 
                />
                <input 
                    placeholder='count'
                    value={ count } 
                    onChange={ ev => setCount(ev.target.value)} 
                />
                 <input 
                    placeholder='duration'
                    value={ duration } 
                    onChange={ ev => setDuration(ev.target.value)} 
                />

                <button>Create Routines</button>
 </form>
    )
}







export default CreateRoutine
