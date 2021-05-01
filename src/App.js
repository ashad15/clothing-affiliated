import "./App.css";
import HomePage from "./pages/homepage";
import "./scss/App.scss";
import {Route, Switch} from 'react-router'


function Hats() {
  return(
    <div>
      hats
    </div>
  )
}

function App() {
  return (
    <div>
    <Switch>
      <Route exact path ='/' component = {HomePage}/>
      <Route exact path = '/hats' component = {Hats}/>
    </Switch>
    </div>
  );
}

export default App;
