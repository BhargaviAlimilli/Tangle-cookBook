import React from 'react'
import Container from '@mui/material/Container';
import {Typography,Box} from '@mui/material'

function Home(){

    return(
        <>
        <div className='Home-div'>
        <Container >
        <Box sx={{ backgroundColor: 'transparent','&:hover': {backgroundColor: 'black',
          opacity: [0.9, 0.8, 0.7],}, margin:'30px'}}>
          <div >
          <center>
            <Typography variant="h2" fontFamily='Satisfy'>
                 Welcome Food Buddy!
            </Typography>
            <Typography variant="h4" >
                Explore our services, get plating ideas and make your meal more special<br/>
                    You can get any recipe from "Tangle-CookBook".
            </Typography>
            <Typography variant='h3'>
                Happy Cooking!
            </Typography>
          </center>
          </div>
        </Box>
        </Container>
        </div>
        
        </>
    )
}

export default Home