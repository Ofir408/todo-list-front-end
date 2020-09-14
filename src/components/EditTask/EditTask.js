import React, { useContext, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CloseIcon from '@material-ui/icons/Close';
import "./EditTask.css";
import { Context } from '../../App'

const ViewTask = ({ task, setEditMode }) => {
    const { dispatchTasks } = useContext(Context);
    const [name, setName] = useState(task.name)
    const [description, setDescription] = useState(task.description)

    const onSubmit = async () => {
        const newTask = { name, description }
        await dispatchTasks({ type: 'editTask', payload: [task, newTask] });
        setEditMode(false);
    }

    return (
        <Card className="">
            <CardHeader
                className="CardHeader"
                titleTypographyProps={{ variant: 'h4' }}
                title={<TextField value={name} variant="outlined"
                    margin="normal"
                    required
                    onChange={({ target: { value } }) => setName(value)} label="Name" />}
            />
            <CardContent>
                <TextField
                    label="Description"
                    multiline
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    rowsMax={4}
                    value={description}
                    onChange={({ target: { value } }) => setDescription(value)}
                />
            </CardContent>
            <CardActions className="IconsLine">
                <IconButton onClick={async () => onSubmit()} aria-label="submit-edit">
                    <DoneOutlineIcon />
                </IconButton>
                <IconButton onClick={() => setEditMode(false)} aria-label="go-back">
                    <CloseIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ViewTask;