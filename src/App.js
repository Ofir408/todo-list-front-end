import React, { useReducer, createContext, useEffect } from "react";
import FilesPage from "./screens/filesPage/filesPage";
import CreateFile from "./screens/createFile/createFile";
import Navbar from "./components/navbar/Navbar";
import { taskReducer } from "./context/taskReducer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import api from "./api";

let Context;

const App = (props) => {
  const [tasks, dispatchTasks] = useReducer(taskReducer, []);
  Context = createContext({ tasks: [], dispatchTasks });

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await api.get(`/getTasks`);
  
      if (response.status == 200 && response.data) {
        console.log('getTasks response data:' + JSON.stringify(response.data))
        dispatchTasks({ type: 'updateTasks', payload: response.data })
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await api.post('/addTask', { task });
  
      if (response.status == 200 && response.data) {
        console.log('addTask response data:' + JSON.stringify(response.data));
        dispatchTasks({ type: 'updateTasks', payload: response.data });
      } else {
        console.log("response failed: " + response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const deleteTask = async ({ id }) => {
    try {
      console.log(id);
      const response = await api.post('/deleteTask', { id });
  
      if (response.status == 200 && response.data) {
        console.log('delete response data:' + JSON.stringify(response.data));
        dispatchTasks({ type: 'deleteTask', payload: id });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const deleteAll = async () => {
    try {
      await api.post('/deleteAll');
      dispatchTasks({ type: 'deleteAll' });

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Context.Provider value={{ tasks, dispatchTasks, addTask, deleteTask, deleteAll }}>
      <Router>
        <div className="App rtl">
          <Navbar />
          <div className="screens-container">
            {props.children}
            <Route path="/home" component={FilesPage} />
            <Route path="/create" component={CreateFile} />
          </div>
        </div>
      </Router>
    </Context.Provider>
  );
};

export { App, Context };
