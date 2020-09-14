import React, { useContext, useState } from 'react';
import { Context } from '../../App';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import "./createFile.css";

const CreateFile = () => {
    const { addTask } = useContext(Context);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = () => {
        console.log("OnSubmit");
        const task = { name ,description }
        addTask(task);
    }

    return (
        <Card className="Card" variant="outlined">
            <CardHeader
                className="CardHeader"
                titleTypographyProps={{ variant: 'h6' }}
                title={<Typography component="h1" variant="h5">
                    Add New Task
                        </Typography>}
            />

            <CardContent>
                <form noValidate className="form" autoComplete="off">
                    <TextField value={name} variant="outlined"
                        margin="normal"
                        required
                        fullWidth onChange={({ target: { value } }) => setName(value)} label="Name" />
                    <TextField
                        label="Description"
                        multiline
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        rowsMax={4}
                        value={description}
                        onChange={({ target: { value } }) => setDescription(value)}
                    />
                </form>
            </CardContent>
            <CardActions className="Icons">
                <Button className="AddBtn" onClick={onSubmit} variant="outlined" color="primary" endIcon={<AddIcon />}>
                    Add Task
            </Button>
            </CardActions>
        </Card>
    );
}

export default CreateFile;