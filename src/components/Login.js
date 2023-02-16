import React, {useState} from 'react';
import { login } from '../api'

const Login = (props) => {
    const setUser = props.setUser
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit = { async (ev) => {const user = await login(ev, username, password); setUser(user) }} >
            
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

