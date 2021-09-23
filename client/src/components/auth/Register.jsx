import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { server } from '../../config';

export default function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(() => e.target.value);
  }

  function handleEmail(e) {
    setEmail(() => e.target.value);
  }

  function handleRepeatPass(e) {
    setRepeatPassword(() => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${server}/auth/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({username, password, email, repeat_password: repeatPassword})
    }).then(res => {
      if (!res.ok) {
        console.log(res);
        if (res.status === 401) {
          res.json().then(data => setError('⛌ '+data.message));
          throw Error('Already Exists!');
        }
        res.json().then(data => {
          if (data.message === '"repeat_password" must be [ref:password]') {
            setError('⛌ Passwords mismatched!');
          }
        });
        setError('Something went wrong!');
        throw Error('Something went wrong!');
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
      })
  }

  return (
    <div className="flex justify-center mt-10 sm:mt-24">
      <form action="" onSubmit={handleSubmit} className="p-8 bg-white rounded-lg mb-10 shadow-lg w-3/4 sm:w-86">
        <h1 className="text-center text-2xl mb-6 text-gray-700 font-medium">Register</h1>
        <label className="login-labels">Username</label>
        <input type="text" value={username} placeholder='Username'  name="username" onChange={handleUsername} className="login-input bg-gray-100 block"/>
        <label className="login-labels">Email</label>
        <input type="text" value={email} placeholder='Email'  name="emali" onChange={handleEmail} className="login-input bg-gray-100 block"/>
        <label className="login-labels">Password</label>
        <input type="password" value={password} placeholder="Password" name="password" onChange={handlePassword} className="login-input bg-gray-100 block"/>
        <label className="login-labels">Repeat Password</label>
        <input type="password" value={repeatPassword} placeholder="Repeat Password" name="repeat_password" onChange={handleRepeatPass} className="login-input bg-gray-100 block"/>
        <button className="p-2 mt-4 text-gray-100 bg-blue-500 hover:bg-blue-400 rounded-sm">Register</button>
        <div className="login-error">{error}</div>
        <div className="text-gray-600 mt-4">Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link></div>
      </form>
    </div>
  )
}