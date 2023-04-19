import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import TodoList from './components/todosList';
import TodoForm from './components/todoForm';
import useApi from './hooks/useApi';
import axios from 'axios';
import TodoRender from './components/todoRender';


function App() {
  
  const [apiData, setApiData] = useState([])
  

  const { data } = useApi('http://localhost:3001')
  useEffect(()=>{
    setApiData(data)
  }, [data])


  return (
    <div>
      <Route path={"/"}><NavBar/></Route>
      <Switch>
        <Route exact path={"/"}><TodoList/><TodoRender todosData={apiData}/></Route>
        <Route exact path={"/form"}><TodoForm/></Route>
      </Switch>
    </div>

  )
}

export default App
