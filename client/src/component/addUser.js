
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import {Alert} from "react-bootstrap";

// function Showusers() {
//     const [firstName, setfirstName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [address, setaddress] = useState("");
//     const [file, setFile] = useState();
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       const url = 'http://localhost:3001/addUser';
//       const formData = new FormData();
//       formData.append('firstName', firstName);
//       formData.append('lastName', lastName);
//       formData.append('address',address);
//       formData.append('file',file);
  
//       console.log(formData.get("firstName"));
//       Axios.post(url, formData).then((response) => {
//         console.log(response.data);
//       });
  
//     }
//     return (
//       <>
//       <div className="App">
       
//       </div>
//           <div class="box">
//               <div class="form">
//                   <h2>SIGN IN</h2>
//                   <div class="inputBox">
//                       <input type="text"
//                     placeholder="First Name..."
//                     onChange={(event) => {
//                       setfirstName(event.target.value);
//                     }}/>
//                       <span>First Name</span>
//                       <i></i>
//                   </div>
//                   <div class="inputBox">
//                       <input type="text"
//                     placeholder="Last Name..."
//                     onChange={(event) => {
//                       setlastName(event.target.value);
//                     }}/>
//                       <span>Last Name</span>
//                       <i></i>
//                   </div>
//                   <div class="inputBox">
//                       <input type="text"
//                     placeholder="Address..."
//                     onChange={(event) => {
//                       setaddress(event.target.value);
//                     }}/>
//                       <span>Address</span>
//                       <i></i>
//                   </div>
//                   <div class="inputBox">
//                   <input 
//                     type='file' 
//                     label='Upload'
//                     onChange={(event) => {
//                       setFile(event.target.files[0]);
//                     }}
//                   />
//                       <span>Profile photo</span>
//                       <i></i>
//                   </div>
//                   <div>
//                     <br/>
//                   <input type="submit" value="Login" onSubmit={handleSubmit}/>
//                   </div>
//               </div>
//           </div>
//           </>
//     );
//   }
const Showusers = ()=>{
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [file, setFile] = useState(null);
  const [error, seterror] = useState("");
  const [type, settype] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'http://localhost:3001/addUser';

    const formData = new FormData();
    if(firstName===""||lastName===""||address===""||file===null){
      console.log("here");
      seterror("Enter valid values in each field");
      settype("error")
      return;
    }
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('address',address);
    formData.append('file',file);
    console.log(formData.get("firstName"));
    Axios.post(url, formData).then((response) => {
      console.log(response.data);
      seterror("User has been added to the data base");
      settype("success");
    });

  }

  return(
    <>
     <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto " href="/">Home</a></li>
          <li><a className="nav-link scrollto active" href="/addUser">Add User</a></li>
          <li><a className="nav-link scrollto" href="/users">All Users</a></li>
        </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>{/* .navbar */}
      </div>
    </header>{/* End Header */}

  <div id="form">
   
      <h3>Add user</h3>
      {error && <p className={type}  >{error}</p>}
      <div className="field-wrap">  
        <input type="text" id="firstName" onChange={(ev)=>{setfirstName(ev.target.value); seterror("");}} name="firstName" autoFocus required ></input>
        <label htmlFor="email">First Name</label>
      </div>
      
      <div className="field-wrap">
        <input type="text" onChange={(ev)=>{setlastName(ev.target.value); seterror(""); }} id="password" name="lastName" required ></input>
        <label  htmlFor="last name">Last Name</label>
      </div>
      <div className="field-wrap">
        <input type="text"  onChange={(ev)=>{setaddress(ev.target.value); seterror(""); }}  name="Address" required ></input>
        <label  htmlFor="Address">Address</label>
      </div>
      <div className="field-wrap">
        <input type="file"  onChange={(event) => {
                       setFile(event.target.files[0]);
                       seterror("");
                       }}
                       />
      </div>
      <div className="text-center">
      <input type="submit" value="Create User" onClick={handleSubmit}></input>
      {/* <button type="submit" onSubmit={handleSubmit}>Add it</button> */}
        
      </div>
  </div>
  </>
  )
};
  export default Showusers;
