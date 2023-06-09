import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function View() {

    const params = useParams();
    console.log(params.id);
    const [task, settask] = useState({});

    const fetchSingletask = async () => {
        const res = await axios.get(
            `https://6469fe50183682d6144afb3e.mockapi.io/tasks/${params.id}`
        );
        settask(res.data);
    };

    useEffect(() => {
        fetchSingletask();
    }, []);
    console.log(task);
    return (
        <div className="m-auto w-25">
            <div className="conatiner">
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">Task Name {task.title}</h5>
                        <h6 class="card-title">Status {task.Status}</h6>
                        {/* <h6 class="card-title">Id {task.id}</h6> */}
                        <Link to={'/home'}>
                            <a class="btn btn-primary">Go Back</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
