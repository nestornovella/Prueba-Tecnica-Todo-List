import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import TodoList from './components/todosList';
import TodoForm from './components/todoForm';
import TodoRender from './components/todoRender';
import { useAppContext } from './components/appProvider';
import { getData } from './hooks/useApi';



function App() {
  
  const { todos, dispatch } = useAppContext()
 

  
  useEffect(  ()=>{
   getData().then(response =>
    dispatch({
      type:'ADD_DATA',
      payload: response
    })
    
    )
  }, [])
  
  console.log(todos)

  function changePriority(data){
    setPriority(data)
  }

  


  return (
    
    <div>
      <Route path={"/"}><NavBar/></Route>
      <Switch>
        <Route exact path={"/"}><TodoList/><TodoRender todosData={todos} /></Route>
        <Route exact path={"/form"}><TodoForm/></Route>
      </Switch>
    </div>

  )
}

export default App
