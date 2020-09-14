import React, { useState } from 'react'
import ViewTask from '../ViewTask/ViewTask';
import EditTask from '../EditTask/EditTask'
import "./Task.css";

const Task = ({ task }) => {
    const [editMode, setEditMode] = useState(false);

    return (
        editMode
            ? <EditTask setEditMode={setEditMode} task={task} />
            : <ViewTask setEditMode={setEditMode} task={task} />
    );
}

export default Task;