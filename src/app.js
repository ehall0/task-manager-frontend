import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Form from './form.js';

const App = (props) => {
    //CREATE STATE
    //this state holds our array of holidays
    const [tasks, setTasks] = React.useState(null);
   
    const [editTasks, setEditTask] = React.useState({
        groupName: '',
        description: '',
    });
    // //STATE FOR STORING OUR JWT
    // const [token, setToken] = React.useState(null);
    //OBJECT FOR BLANK FORM FOR CREATE
    const blank = {
        groupName: '',
        description: '',
    };
    //Function to get holidays from API
    const getInfo = async () => {
        const response = await fetch('http://localhost:3002/tasks', {
            
        });
        const result = await response.json();
       
        setTasks(result);
    };
    // //USEEFFECT HOOK HAPPENS WHEN COMPONENTS LOADS AND WILL GRAB API DATA
    React.useEffect(() => {
      
        getInfo();
        
    }, []); //Array is dependencies that would trigger function running again
    //THIS WILL NOT RUN GET INFO UNTIL YOUVE GOTTEN YOUR TOKEN

    //another useEffect to check if localStorage has a token
    // React.useEffect(()=> {
    //     const theToken = window.localStorage.getItem('token')
    //     if(theToken){
    //         setToken(theToken)
    //     }
    // },[])//no dependencies in the array, so function will only run once when component loads individually
    //handleCreate function for the from
    const handleCreate = async (data) => {
        const response = await fetch('http://localhost:3002/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
               
            },
            body: JSON.stringify(data),
        });
        getInfo(); 
    };
    const handleDelete = async (id) => {
        //makes the delete call to the backend
        const response = await fetch(`http://localhost:3002/tasks/${id}`, {
            method: 'DELETE',
            headers: {
               
            },
        });
       
        getInfo();
    };
    //when clicking edit button, this function runs
    const handleSelect = async (task) => {
        setEditTask(task);
    };
    const handleEdit = async (data) => {
        //updates the selected holiday
        const response = await fetch(
            `http://localhost:3002/tasks/${data._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                   
                },
                body: JSON.stringify(data),
            }
        );
        
        getInfo();
    };
    // const handleLogin = async (data) => {
    //     const response = await fetch('http://localhost:3000/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     const result = await response.json();
    //     console.log(result);
    //     setToken(result);
    //     window.localStorage.setItem('token', JSON.stringify(result))
    //};
    return (
        <>
            <h1>Task Manager</h1>
            <ul>
                {tasks
                    ? tasks.map((task) => {
                          return (
                              <li key={task._id}>
                                  <h1>{task.groupName}</h1>
                                  <h3>{task.description}</h3>
                                  <button
                                      onClick={() => {
                                          handleDelete(task._id);
                                      }}
                                  >
                                      Delete
                                  </button>
                                  <button
                                      onClick={() => {
                                          handleSelect(task);
                                      }}
                                  >
                                      Edit
                                  </button>
                              </li>
                          );
                      })
                    : 'LOADING...'}
            </ul>
            <h1>Create a Task</h1>
            <Form initial={blank} handleSubmit={handleCreate} />
            <h1>Edit Selected Task</h1>
            <Form initial={editTasks} handleSubmit={handleEdit} />
        </>
    )
};
const target = document.getElementById('app');
ReactDOM.render(<App />, target);