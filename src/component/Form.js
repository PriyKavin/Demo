import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    Status: '',
  });

  const handleChange = (event) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value })); //name:"",age:0,roll:0,place:"",
  };

  const handleSubmit = async () => {
    if (form.title === '') {
      alert('Task name is required');
      return;
    }
    if (form.title.length < 4) {
      alert('Atleat 4 Character  is required');
      return;
    }
    
    if (form.Status === '') {
      alert('Status is required');
      return;
    }
    if (form.Status.length < 3) {
      alert('Atelast 3 Character is required');
      return;
    }

    const res = await axios.post(
      'https://6469fe50183682d6144afb3e.mockapi.io/tasks',
      form
    );
    if (res.status === 201) {
      alert('Task Registered Successfully');
      navigate('/home');
    }
  };

  return (
    <div className="m-auto w-25 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label for="exampleInputEmail1" class="form-label">
             Task  Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="title"
              aria-describedby="emailHelp"
              onChange={(event) => handleChange(event)}
            />
          </div>
          
            
          </div>
          <div className="col-6">
            <label for="exampleInputEmail1" class="form-label">
              Ststus
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="Status"
              aria-describedby="emailHelp"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    
  );
}

export default Form;