import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import Menu from './Menu';
import {Link} from 'react-router-dom'

function HomeIcon(){
  return (
    <SvgIcon >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 } }>
      <AppBar position="relative">
        <Toolbar>
          <Menu />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin:'10px'} } >
             <h3>  Tangle-CookBook  </h3>
          </Typography> 
          <Link to="/">
            <HomeIcon />           
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
