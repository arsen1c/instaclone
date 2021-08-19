import Navbar from './navbar';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import MessageBox from './messaging/MessageBox';
import Account from './auth/Account';

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
      </Switch>
    </>
  );
}

export default App;
