import React, { useContext } from "react";
import Task from "../../components/Task/Task";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Tooltip, Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Context } from "../../App";
import "./filesPage.css";
import styles from './filesPageStyle';

const FilesPage = () => {
  const { tasks, deleteAll } = useContext(Context);

  const classes = styles();
  return (
    <>
      <Box className="Grid">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          {tasks.map((currTask) => (
            <Grid item className="Grid" xs={2} sm={3} key={currTask.id}>
              <Task className="Grid" task={currTask} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Tooltip title="Remove all" aria-label="Remove all" placement="top">
        <Fab
          color="primary"
          onClick={deleteAll}
          className={classes.removeButton}
        >
          <DeleteIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default FilesPage;
