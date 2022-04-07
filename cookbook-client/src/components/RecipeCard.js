import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ReciepeModal from './ReciepeModal';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const RecipeCard = ({data}) => {
    return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {data.map((data, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item>
            <img src={data.recipe.image}></img>
          </Item>
          <Item>
            <h4 >{data.recipe.label}</h4>
            <p >Cuisine Type: {data.recipe.cuisineType} <br/>
            Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
            <ReciepeModal source={data} />
          </Item>
        </Grid>
      ))}
    </Grid>
  </Box>
);
}

export default RecipeCard
