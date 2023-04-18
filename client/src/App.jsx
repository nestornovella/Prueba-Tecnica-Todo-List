import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import TodoList from './components/todosList';


function App() {


  return (
    <div>
      <NavBar />
      <Switch>

        <Route path={"/"}> <TodoList /> </Route>
        <Route></Route>

      </Switch>
    </div>

  )
}

export default App
