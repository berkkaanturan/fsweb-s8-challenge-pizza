import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Order from './components/Order';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;