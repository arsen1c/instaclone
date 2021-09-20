import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { server } from '../../config';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(() => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${server}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({username, password})
    }).then(res => {
      if (!res.ok) {
        throw Error('Invalid credentials');
      }
      return res.json()
    })
      .then(json => {
        console.log(json);
        setError(null);
        history.push('/');
      })
      .catch(e => {
        console.log(e);
        setError(e.message);
      })
  }

  return (
    <div className="flex justify-center">
      <form action="" onSubmit={handleSubmit} className="p-4 bg-white">
        <label>Login</label>
        <input type="text" value={username} placeholder='Username'  name="username" onChange={handleUsername} className="bg-gray-100 block"/>
        <label>Password</label>
        <input type="password" value={password} placeholder="Password" name="password" onChange={handlePassword} className="bg-gray-100 block"/>
        <button className="border-2 mt-2 rounded p-1 hover:opacity-60">Submit</button>
        <div className="text-red-500 text-sm">{error}</div>
      </form>
    </div>
  )
}