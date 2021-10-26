import Navbar from './navbar';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import MessageBox from './messaging/MessageBox';
import { Account, Login, Register } from './auth';
import NewPost from './posts/New';
// import { UserContext } from '../context/UserContext';

function App() {
  return (
    <>
      <Navbar isAuth={true}/>
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
    </>
  );
}

export default App;
