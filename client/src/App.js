import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Adduser from "./component/addUser";
import Showusers from "./component/showUsers";
import Home from "./component/home";

function App() {
 return ( 
   <>
  <Router>
  <Routes>
  <Route exact path="/" element={<Home />} ></Route>
  <Route exact path="/users" element={<Showusers />} ></Route>
  <Route exact path="/addUser" element={<Adduser />} ></Route>
</Routes>
</Router>
</>
 )
}

export default App;