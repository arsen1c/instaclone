import Navbar from './navbar';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import MessageBox from './messaging/MessageBox';
import { Account, Login, Register } from './auth';
import NewPost from './posts/New';
// import { UserContext } from '../context/UserContext';
import { useState, useMemo, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  // const providerValue = useMemo(() => ({user, setUser}), [user, setUser]); 

  return (
    <>
      <Navbar isAuth={true}/>
      {/*<UserContext.Provider value={providerValue}>*/}
        <Switch>
          <Route path="/" exact>
          <Home />
          </Route>
          <Route path="/inbox" component={MessageBox} />
          <Route path="/new" >
            <NewPost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/:username" component={Account} />
        </Switch>
      {/*</ UserContext.Provider>*/}
    </>
  );
}

export default App;
