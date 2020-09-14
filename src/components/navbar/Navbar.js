import React from 'react';
import { IconButton, Toolbar, AppBar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar style={styles.appBar} position="static">
            <Toolbar>

                <Link replace to="/home" className="Link">
                    <IconButton className="Icon" edge="start">
                        <HomeIcon style={styles.icon} />
                    </IconButton>
                </Link>

                <Link replace to="/create" className="Link">
                    <IconButton edge="end">
                        <AddIcon style={styles.icon} />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

const styles = {
    icon: {
        fill: 'white'
    },

    appBar: {
        background: 'rgb(5, 183, 180)'
    }
}

export default Navbar;