import Table from './componet/Table';
import Card from './componet/Card';
import { Component, useState } from 'react';
import Timer from './componet/Timer';
import Counterf from './componet/Counterf';
import Input from './componet/Input';
import { Formval } from './componet/Formval';
import Fetch from './componet/Fetch';
import Todo from './componet/Todo';
import React from 'react';
import Todo1 from './componet/Todo1';
import Eventhandler from './componet/Eventhandler'
import { Route, Routes } from 'react-router-dom'
import Nav from './componet/Nav';

// const UserWithComp = WhitLoading(UserList)

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/Todo' element={<Todo/>}/>
        <Route path='/Timer'element={<Timer/>}/>
      </Routes>
    </>
  );
}


export default App;
