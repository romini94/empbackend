import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

function List() {

  const [list, setList] = useState([]);
  const load=()=>{
    axios.get("http://localhost:8000/findall")
      .then((response) => {setList(response.data.data)
        console.log(response.data)})

      .catch((err) => console.error(err))

    }
  useEffect(() => {
    load()
  }, []);
  console.log(list)
  const handleClick = (id) => {

    axios.post("http://localhost:8000/update/" + id)
      .then((response) => {console.log(response)
        load()
      }
    )
      .catch((err) => console.error(err))
    
  }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: 'gray' }}>Employee List</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>sl no</th>
            <th>Name</th>
            <th>Position</th>
            <th>Date of Joining</th>
            <th>Contact</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((item, index) => (
              <tr key={index} >
                <td>{index + 1}<AiFillLike /> </td>
                <td>{item.firstname} {item.lastname}</td>
                <td>{item.position}</td>
                <td>{item.dateofjoining}</td>
                <td>{item.contact}</td>
                <td>{
                  item.isactive==true?<MdDelete onClick={() => handleClick(item._id)} />:<p>diactivated</p>
                  }  </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No employees to display
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default List;

