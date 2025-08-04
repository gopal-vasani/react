// import Table from './componet/Table';
// import Card from './componet/Card';
// import { Component, useState } from 'react';
// import Timer from './componet/Timer';
// import Counterf from './componet/Counterf';
// import Input from './componet/Input';
// import { Formval } from './componet/Formval';
// import Fetch from './componet/Fetch';
// import Todo from './componet/Todo';
// import React from 'react';
// import Todo1 from './componet/Todo1';
// import Eventhandler from './componet/Eventhandler'
// import { Route, Routes } from 'react-router-dom'
// import Nav from './componet/Nav';
// import Locals from './componet/Locals';
// import Speed from './componet/Speed';
// import Demo from './componet/Demo';
// import Explorer from './componet/Explorer';
// import Navbar from './componet/Navbar';
// import Counterc from './componet/Counterc';
// import Multi from './componet/Multi';

import HomePage from "./componet/HomePage";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// const UserWithComp = WhitLoading(UserList)

function App() {
  return (
    <>
    
      {/* <Nav />
      <Routes>
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Timer' element={<Timer />} />
        <Route path='/Timer' element={<Timer />} />

      </Routes> */}

      {/* <Eventhandler/> */}
      
      {/* <Navbar/>


      <Routes>

        <Route path='/Counterc' element={< Counterc />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Multi' element={<Multi />} />
        <Route path='/Speed' element={<Speed/>}>
          <Route path='counterf' element={<Counterf/>}></Route>
          <Route path='demo' element={<Demo/>}></Route>
        </Route>

      </Routes> */}

      <HomePage/>

    </>
  );
}


export default App;
