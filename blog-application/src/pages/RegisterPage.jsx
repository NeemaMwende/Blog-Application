import React, { useState } from 'react';
import api from '../services/api.jsx';

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await api.register({username, email, password});
      localStorage.setItem('token',data.token);
      console.log(data)
      
    } catch (error) {
      console.log(error.message);
    }
    // const res = await fetch('http://localhost:5000/api/auth/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type':'application/json'
    //   },
    //   body:JSON.stringify({
    //     username,
    //     email,
    //     password
    //   })
    // })
    // const data = await res.json();
    // console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>  

        <div>
          <label htmlFor="">Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
          
          <div>
            <label htmlFor="">Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        
          <button type='submit'>Register</button>

      </form>
    </div>
  )
}

export default RegisterPage
