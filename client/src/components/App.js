import Navbar from './navbar';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import MessageBox from './messaging/MessageBox';
import Account from './auth/Account';
import NewPost from './posts/New';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/inbox" component={MessageBox} />
        <Route path="/arsenic" component={Account} />
        <Route path="/new" component={NewPost} />
      </Switch>
    </>
  );
}

export default App;
