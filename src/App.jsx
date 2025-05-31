import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Order from "./components/Order";
import OrderSuccess from "./components/OrderSuccess";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/order-success" component={OrderSuccess} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
