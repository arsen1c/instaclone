import Navbar from './navbar';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import MessageBox from './messaging/MessageBox';
import { Account, Login } from './auth/index.js';
import NewPost from './posts/New';

function App() {
  return (
    <>
      <Navbar isAuth={true}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/inbox" component={MessageBox} />
        <Route path="/:username" component={Account} />
        <Route path="/new" component={NewPost} />
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
