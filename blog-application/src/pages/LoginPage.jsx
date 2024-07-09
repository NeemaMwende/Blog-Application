import React, { useState } from 'react'

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json();
    console.log(data);
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
