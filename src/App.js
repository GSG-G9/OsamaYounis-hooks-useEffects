import {Switch, Route, Link, useLocation } from "react-router-dom";

import './App.css';

import ExerciseOne from "./components/ExerciseOne";
import ExerciseTwo from "./components/ExerciseTwo";
import ExerciseThere from "./components/ExerciseThere";

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
      </Switch>

    {location.pathname !== '/' && (<Link to='/'>home</Link>)}
      
    </div>
  );
}

export default App;
