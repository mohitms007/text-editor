import React from 'react'
import AppBar from '@material-ui/core/AppBar';
// or
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const navbar = (props) => {
    const {classes} = props;
    return (
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Bash-Notes
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default navbar
