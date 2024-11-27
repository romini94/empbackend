import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home'
function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Login Data:', formData);
        navigate('/list');
    };

    return (
        <div >
           
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:' #6c757d '}}>
          <div class="container-fluid ms-5">
            <a class="navbar-brand" href="/home" style={{color:"white"}}>Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                
                <li class="nav-item">
                  <a class="nav-link" href="/login" style={{color:"white"}}>Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/profile" style={{color:"white"}}>Profile</a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        




        <div style={styles.container} >

            <div style={styles.formContainer}>
                <h2 style={styles.title}>Employee Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="username" style={styles.label}>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your username"
                    />

                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your password"
                    />

                    <button type="submit" style={styles.button} onSubmit={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
   </div>
  );

}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(141, 166, 203, 0.25)',

    },
    formContainer: {
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
        width: "500px"
    },
    title: {
        textAlign: 'center',
        color: ' #373b3e  ',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '10px',
        color: '#333',
    },
    input: {
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: ' #373b3e ',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

export default Login;