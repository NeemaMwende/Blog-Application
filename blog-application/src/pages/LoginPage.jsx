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
      <h3>Login <span>Page</span></h3>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="">Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
          
          <div>
            <label htmlFor="">Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        
          <div>
            <button type='submit'>Login</button>
            <button type='submit'>Exit</button>
          </div>
          
          <a href="" className='link'>forgot password?</a>


      </form>
    </div>
  )
}

export default LoginPage
