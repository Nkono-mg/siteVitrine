import { Redirect,BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projet-1" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
