import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Register() {
  const [userdata, setuserdata] = useState({
    image: null, // Set the image to null initially
    firstname: '',
    lastname: '',
    username: '',
    dateofbirth: '',
    gender: '',
    contact: '',
    employeeid: '',
    position: '',
    dateofjoining: '',
    password: '',
  });

  const Change = (e) => {
    const { name, value, files } = e.target;
    setuserdata({
      ...userdata,
      [name]: name === 'image' ? files[0] : value, // Store the file object for 'image'
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();

    // Append all the userdata fields
    Object.keys(userdata).forEach((key) => {
      formdata.append(key, userdata[key]);
    });

    try {
      const response = await axios.post('http://localhost:6002/employee', formdata);
      console.log('Response:', response.data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#6c757d' }}>
        <div className="container-fluid ms-5">
          <a className="navbar-brand" href="/" style={{ color: 'white' }}>
            Home
          </a>
        </div>
      </nav>

      <div className="container">
        <h1 style={{ textAlign: 'center', color: '#6c757d' }}>Employee Registration Form</h1>
        <Form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={Change}
                accept="image/*" // Accept only image files
              />
            </Form.Group>
          </Row>

          <h4 style={{ color: 'grey' }}>Personal Info</h4>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstname"
                onChange={Change}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastname"
                onChange={Change}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  onChange={Change}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of birth"
                required
                name="dateofbirth"
                onChange={Change}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gender"
                name="gender"
                onChange={Change}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>Contact number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Contact number"
                name="contact"
                onChange={Change}
                required
              />
            </Form.Group>
          </Row>

          <h4 style={{ color: 'gray' }}>Employee Details</h4>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Employee ID"
                name="employeeid"
                onChange={Change}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Position"
                name="position"
                onChange={Change}
              />
             </Form.Group>
             <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="text"
                placeholder="pass"
                name="password"
                onChange={Change}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom10">
              <Form.Label>Date of joining</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of joining"
                name="dateofjoining"
                onChange={Change}
              />
            </Form.Group>
          </Row>

          <Button type="submit" style={{ backgroundColor: 'grey' }}>
            Submit form
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
