import {Switch, Route, Link, useLocation } from "react-router-dom";

import './App.css';

import ExerciseOne from "./components/ExerciseOne";
import ExerciseTwo from "./components/ExerciseTwo";
import ExerciseThere from "./components/ExerciseThere";
import ExerciseFour from "./components/ExerciseFour";

function App() {
  const location = useLocation();

  console.log();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Link to='/ExerciseOne'>ExerciseOne</Link><br/>
          <Link to='/ExerciseTwo'>ExerciseTwo</Link><br/>
          <Link to='/ExerciseThere'>ExerciseThere</Link><br/>
          <Link to='/ExerciseFour'>ExerciseFour</Link><br/>
        </Route>
        
        <Route exact path="/ExerciseOne">
          <ExerciseOne />
        </Route>
        <Route exact path="/ExerciseTwo">
          <ExerciseTwo />
        </Route>
        <Route exact path="/ExerciseThere">
          <ExerciseThere />
        </Route>
        <Route exact path="/ExerciseFour">
          <ExerciseFour />
        </Route>
      </Switch>

    {location.pathname !== '/' && (<Link to='/'>home</Link>)}
      
    </div>
  );
}

export default App;
