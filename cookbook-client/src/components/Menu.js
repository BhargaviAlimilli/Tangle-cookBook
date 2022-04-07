import * as React from 'react';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  let history= useNavigate()

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCloseRecipes = (event) => {
    console.log("hello from recipes")
    history("/recipes")
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
    setOpen(false);
  };
  const handleCloseGallery = (event) => {
    console.log("hello from gallery")
    history("/gallery")
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
    setOpen(false);
  };
  const handleCloseAbout = (event) => {
    console.log("hello from about")
    history("/aboutus")
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      
      <div className='menu-btn'>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                {/* <ClickAwayListener onClickAway={handleClose}> */}
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleCloseRecipes}>Recipes</MenuItem>
                    <MenuItem onClick={handleCloseGallery}>Gallery</MenuItem>
                    <MenuItem onClick={handleCloseAbout}>About Us</MenuItem>
                    <MenuItem onClick={handleCloseRecipes}>FeedBack</MenuItem>
                  </MenuList>
                {/* </ClickAwayListener> */}
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
