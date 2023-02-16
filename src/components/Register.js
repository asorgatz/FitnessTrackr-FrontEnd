import React, {useState} from 'react';
import { register } from '../api'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
      <div>
        <h3>Register</h3>
          <form onSubmit = { async (ev) => await register(ev, username, password) } >
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
      </div>
    )
}

export default Register;