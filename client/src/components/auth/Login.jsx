import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { server } from '../../config';
import { UserContext } from '../../context/UserContext';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(() => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const button = e.target.querySelector('button');

    button.disabled = true;
    setIsProcessing(true);
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
        setIsProcessing(false);
        if (res.status === 401) {
          button.disabled = false;
          throw Error('⛌ Invalid credentials');
        }
        button.disabled = false;
        setIsProcessing(false);
        throw Error('Something went wrong!');
      }
      return res.json()
    })
      .then(json => {
        console.log(json);
        setUser(json.result.user);
        setError(null);
        setIsProcessing(false);
        button.disabled = false;
        history.push('/');
      })
      .catch(e => {
        console.log(e);
        setError(e.message);
      })
  }

  return (
    <div className="flex justify-center mt-24">
      <form action="" onSubmit={handleSubmit} className="p-8 bg-white rounded-lg w-3/4 mb-10 shadow-lg sm:w-86">
        <h1 className="text-center text-2xl mb-6 text-gray-700 font-medium">Login</h1>
        <label className="login-labels">Username</label>
        <input type="text" value={username} placeholder='Username'  name="username" onChange={handleUsername} className="login-input bg-gray-100 block" required/>
        <label className="login-labels">Password</label>
        <input type="password" value={password} placeholder="Password" name="password" onChange={handlePassword} className="login-input bg-gray-100 block" required/>
        <button  className={`p-2 mt-4 text-center text-gray-100 bg-blue-500 hover:bg-blue-400 rounded-sm ${isProcessing ? 'opacity-50' : ''}`}>Login</button>
        <div className="login-error">{error}</div>
        <div className="text-gray-600 mt-4">Need an account? <Link to="/register" className="text-blue-400 hover:underline">Register</Link></div>
      </form>
    </div>
  )
}