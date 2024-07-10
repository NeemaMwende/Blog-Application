import React, { useState } from 'react'
import api from '../services/api';
import "../pages/LoginPage.css";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)

    try {
      const data = await api.login({email, password});
      localStorage.setItem('token',data.token);
      console.log(data);

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="">Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
          
          <div>
            <label htmlFor="">Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        
          <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default LoginPage
