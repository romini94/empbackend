import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Profile() {
  const [formdata, setformdata] = useState([]);
  const em = localStorage.getItem("empid")
  const navigate = useNavigate();
  const edit = () => {
    navigate('/Registerd')

  }
 

  useEffect(() => {
    axios.get("http://localhost:8000/profile/" + em)
    .then((response) => { setformdata(response.data.data) })

    .catch((err) => console.error(err))
  }, [])


  const handleclick = (e) => {
    e.preventDefault();
    localStorage.removeItem("empid")
    alert("please login again")
navigate('/login')

  }





  return (

    <div style={{ marginLeft: "20px", color: "crimson" }}>
      <h2> Profile</h2>
      {formdata.image&&(<p><strong> profile image</strong>
      <br/> <img src={`http://localhost:8000/upload/${formdata.image}`}alt="profile" style={{width:"150px",height:"150px",borderRadius:"50%"}} />  </p>)}
      
      <p><strong>Name:</strong> {formdata.firstname} &nbsp;{formdata.lastname}</p>

      <p><strong>username:</strong> {formdata.username}</p>
      <p><strong>dateofbirth:</strong> {formdata.dateofbirth}</p>
      <p><strong>gender:</strong> {formdata.gender} </p>
      <p><strong>contact:</strong> {formdata.contact}</p>
      <p><strong>Employee id:</strong> {formdata.employeeid}</p>
      <p><strong>Position:</strong> {formdata.position}</p>
      <p><strong>date of joining:</strong> {formdata.dateofjoining}</p>
     
      <button type="button" class="btn btn-danger" onClick={edit}> edit</button>
      <button type="button" class=" ms-5 btn btn-danger" onClick={handleclick}>logout</button>
    </div>
  );
}

export default Profile;