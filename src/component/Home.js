import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function Home() {
  const [tasklist, settasklist]=useState([]);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState('');
  const [edittaskData, setEdittaskData] = useState({});

  const handleChange = (event) => {
    setEdittaskData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    })); //name:"",age:0,roll:0,place:"",
  };

  const fetchtasklist = async()=>{
    const res = await axios.get('https://6469fe50183682d6144afb3e.mockapi.io/tasks');
    settasklist(res.data);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `https://6469fe50183682d6144afb3e.mockapi.io/tasks/${id}`
    );
    if (res.status === 200) {
      alert(`Deleted Successfully`);
      fetchtasklist();
    }
  };

  const fetchSingletask = async () => {
    const res = await axios.get(
      `https://6469fe50183682d6144afb3e.mockapi.io/tasks/${editId}`
    );
    setEdittaskData(res.data);
  };

  useEffect(() => {
    fetchtasklist();
    if (editId !== '') {
      fetchSingletask();
    }
  }, [editId]);

  const handleEditModal = (id) => {
    setEditId(id);
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(!modal);
  };

  const handleEditSubmit = async () => {
    const res = await axios.put(
      `https://6469fe50183682d6144afb3e.mockapi.io/tasks/${editId}`,
      edittaskData
    );
    if (res.status === 200) {
      alert('updated');
      closeModal();
      fetchtasklist();
    }
  };
console.log("ok")
  return (
   
    <div className="m-auto w-50 mt-5">
      <div className="d-flex justify-content-end">
        <Link to={'/form'}>
          <button className="btn btn-sm btn-primary">Create task +</button>
        </Link>
      </div>
      <div className="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Status</th>
              
            </tr>
          </thead>
          <tbody>
            {tasklist.map((object, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{object.title}</td>
                  <td class={object.Status ?"fa fa-check":"fa fa-times"}></td>
                  
                  <td>
                  <Link to={`/table/view/${object.id}`}>
                    <button>View</button>
                    </Link>
                    
                    <button onClick={() => handleEditModal(object.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(object.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Edit Student</ModalHeader>
        <ModalBody>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">
                   Task Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="title"
                    aria-describedby="emailHelp"
                    value={edittaskData.title}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div className="col-6">
                  <label for="exampleInputEmail1" class="form-label">
                   Status
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="Status"
                    aria-describedby="emailHelp"
                    value={edittaskData.Status}
                    onChange={(event) => handleChange(event)}
                  />
                
                </div>
              </div>
            </div>
          </div>{' '}
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-sm btn-primary" onClick={handleEditSubmit}>Update</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Home;
