import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Registerd() {
  const [validated, setValidated] = useState(false);
  const [formdata, setFormdata] = useState([]);
  const em=localStorage.getItem("empid")

 useEffect(()=>
 {axios.get("http://localhost:8000/profile/"+em)
   .then((response) => {setFormdata(response.data.data) })
  
 .catch((err) => console.error(err))},[])

 const Change = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })

  }



   



  

  

  

  const handleSubmit = async(event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(formdata)}

    // try {
    //   const response = await axios.post("http://localhost:4031/employee/employee", formdata);
    //   console.log(response.data);
     
    // } catch (err) {
    //   console.error(err);
      
    // }









  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#6c757d' }}>
        <div className="container-fluid ms-5">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1 style={{ textAlign: "center", color: "#6c757d" }}>Update details</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
    <Form.Label>change Image</Form.Label>
    <Form.Control
      required
      type="file"
      name="image"
      onChange={Change}
      accept="image/*"
    />
  </Form.Group>
          </Row>


          <h4 style={{ color: "grey" }}>Personal Info</h4>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01" >
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={formdata.firstname}
                value={formdata.firstname}
                name="firstname"
                onChange={Change}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02" >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={formdata.lastname}
                value={formdata.lastname}
                name="lastname"
                onChange={Change}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03" >
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder={formdata.username}
                  aria-describedby="inputGroupPrepend"
                  required
                  name="username"
                  value={formdata.username}
                  onChange={Change}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04" >
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" placeholder={formdata.dateofbirth ||""}  name="dateofbirth" onChange={Change} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date of birth.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05" >
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder={formdata.gender} name="gender" onChange={Change} value={formdata.gender} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid gender.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06" >
              <Form.Label>Contact number</Form.Label>
              <Form.Control type="number" placeholder={formdata.contact} name="contact" value={formdata.contact} onChange={Change} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid contact number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom07" >
              <Form.Label>password</Form.Label>
              <Form.Control type="password" placeholder={formdata.password} name="password" onChange={Change} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password
              </Form.Control.Feedback>
            </Form.Group>


          </Row>

          <h4 style={{ color: "gray" }}>Employee Details</h4>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom08" >
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={formdata.employeeid}
                name="employeeid"
                onChange={Change}
                value={formdata.employeeid}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>Position</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={formdata.position}
                name="position"
                onChange={Change}
                value={formdata.position}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom10" >
              <Form.Label>Date of joining</Form.Label>
              <Form.Control
                type="date"
                placeholder={formdata.dateofjoining}
                name="dateofjoining"
                
                onChange={Change}
                required
                value={formdata.dateofjoining }
              />
              <Form.Control.Feedback type="invalid">
                Please choose a date of joining.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>



          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Button type="submit" style={{ backgroundColor: "grey" }} onClick={handleSubmit}>Submit form</Button>
        </Form>
      </div>
    </div>
  );
}

export default Registerd;
