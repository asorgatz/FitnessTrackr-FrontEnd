import React, {useState} from 'react';
import { editRoutine } from '../api';

const EditRoutine = (props) => {
    const token = window.localStorage.getItem('token');
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const routineId = props.routineId;
    const getMyRoutines = props.getMyRoutines

    const handlesubmit = async ({token, name, goal, isPublic, routineId}) => {
        await editRoutine({token, name, goal, isPublic, routineId })
        getMyRoutines();
    }

    return(
        <div>
            <input
            placeholder='Name'
            value={name}
            onChange={(ev)=> setName(ev.target.value)}
            />
            <input
            placeholder='Goal'
            value={goal}
            onChange={(ev)=> setGoal(ev.target.value)}
            />
            <div>
                <input
                type='checkbox'
                value={isPublic}
                onChange={(ev)=> setIsPublic(ev.target.value)}
                />  
            <label>Will this routine be public?</label>
            </div>
           <button onClick={() => {handlesubmit({token, name, goal, isPublic, routineId})}}>Edit Routine</button> 
        </div>
    )
}

export default EditRoutine;