import React, { useState } from 'react';
import api from '../services/api.jsx';
import "../pages/Register.css";

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
      <h3>Register <span>Form</span></h3>
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
        
          <div className='btn'>
            <button type='submit'>Register</button>
            <button type='submit'>Exit</button>
          </div>

      </form>
    </div>
  )
}

export default RegisterPage
