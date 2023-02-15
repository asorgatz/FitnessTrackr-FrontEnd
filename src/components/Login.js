import React, {useState} from 'react';
import { login } from '../api'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit = { login } >
            
            <input 
            placeholder='username'
            value={ username } 
            onChange={ ev => setUsername(ev.target.value)} 
            />
            <input 
            placeholder='password'
            type='password'
            value={ password } 
            onChange={ ev => setPassword(ev.target.value)} 
            />
            <button disabled={ !username || !password }>Login</button>
    </form>
        </div>
    )
}

export default Login;

