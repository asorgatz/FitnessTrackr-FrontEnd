import React, {useState} from 'react';
import { register } from '../api'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form onSubmit = { register } >
            <h3>Register</h3>
            <input 
              placeholder='username' 
              value={ username } 
              onChange={ ev => setUsername(ev.target.value) } 
            />
            <input 
              placeholder='password'
              type='password'
              value={ password } 
              onChange={ ev => setPassword(ev.target.value) }
            />
            <button>Register</button>
        </form>
    )
}

export default Register;