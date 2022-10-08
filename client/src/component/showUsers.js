
import React, { useState, useEffect } from "react";
import Axios from "axios";

const Adduser = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
      response.data.forEach(element => {
        console.log(element);
      });
    });
  }, []);
  return (
    // <div className="App">
    //   <div className="usersDisplay">
    //   <h1>Users</h1>
    //     {listOfUsers.map((user) => {
    //       return (
    //         <div>
    //           <h1>Name: {user.firstName}</h1>
    //           <h1>Last Name: {user.lastName}</h1>
    //           <h1>address: {user.address}</h1>
    //           <img src={"http://localhost:3001/"+user["profile-picture"]} alt="icons" />
    //         </div>
    //       );
    //     })}
    //   </div>
    //   </div>  
  <>
        <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar">
      <ul>
          <li><a className="nav-link scrollto " href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/addUser">Add User</a></li>
          <li><a className="nav-link scrollto active" href="/users">All Users</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
    <div class="main">
      {listOfUsers.map((user) => {
          return (
        <div class="card">
          <img src={"http://localhost:3001/" + user["profile-picture"]} alt="icons" />
          <div className="details">
            <h2>{user.firstName} {user.lastName}</h2>
            <br />
            <h6>First Name : {user.firstName}</h6>
            <br />
            <h6>Last Name : {user.lastName}</h6>
            <br />
            <h6>Address : {user.address}</h6>
            <br />
          </div>

        </div>
          );
      })}
    </div>
    </>
  );
}

export default Adduser;