import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas,Navbar } from 'bootstrap';
import {Row,Col} from 'react-bootstrap';

function Home() {
    


  return (
    <div>
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Employee Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Employee
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/register"> Register</a></li>
              <li><a class="dropdown-item" href="/login">Login</a></li>
              <li><a class="dropdown-item" href="/profile">Profile</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              
            </ul>
          </li>
        </ul>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             admin
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              
              <li><a class="dropdown-item" href="/login">Login</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="/list"> employee list</a></li>
            </ul>
          </li>


        {/*<a class="nav-link dropdown-toggle" href="/List" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            admin
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/adminlogin"> login</a></li>
              <li><a class="dropdown-item" href="/list">admin page</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li></ul>*/}
           
       
        <img src="https://www.nitsotech.com/wp-content/uploads/Employee-Management-System-and-Why-Does-Your-Business-Need-One.jpg  "/>
      </div>
    </div>

  </div>
</nav>
<div >
<Row >
  <Col>
<img src="https://www.nitsotech.com/wp-content/uploads/Employee-Management-System-and-Why-Does-Your-Business-Need-One.jpg  " style={{boxShadow:"10px 20px 20px rgba(0,0,0.2"}}/>
</Col>
<Col>
<h4 style={{position:"relative",top:"150px",color:"#343a40",fontFamily:"Cormorant Garamond, serif ",lineHeight: '1.5' }}>
An Employee Management System (EMS) is a software application that facilitates the management of employee data and processes within an organization. It streamlines various HR and administrative tasks, improving efficiency and accuracy. 
</h4>
</Col>
</Row>
</div></div>
  )
}

export default Home