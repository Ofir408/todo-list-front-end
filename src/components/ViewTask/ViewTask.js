import React, { useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import "./ViewTask.css";
import PropTypes from 'prop-types';
import { Context } from '../../App'

const ViewTask = ({ task, setEditMode }) => {
    const { deleteTask } = useContext(Context);

    return (
        <Card className="">
            <CardHeader
                className="CardHeader"
                titleTypographyProps={{ variant: 'h4' }}
                title={task.name}
            />
            <CardContent>
                <Typography align="center" variant="h6" color="textSecondary" component="p">
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions className="IconsLine">
                <IconButton onClick={() => deleteTask(task)} aria-label="Trash">
                    <DeleteOutlineIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

ViewTask.propTypes = {
    task: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),

    description: PropTypes.string
}

export default ViewTask;