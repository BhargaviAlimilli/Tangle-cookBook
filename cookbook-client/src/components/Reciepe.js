import React,{useState} from 'react'
import {recipeData} from './../actions/index'
import {Button} from '@mui/material'
import RecipeCard from "./RecipeCard"

const Reciepe = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  
  const submitHandler = async(e) =>{
    e.preventDefault();
    console.log(search)
    const res= await recipeData(search)
    console.log(res.data.hits)
    if(res.data.hits){
      setData(res.data.hits)
    }  
  }
  // const found=()=>{
  //   return(
  //     <RecipeCard  data={data}/>
  //   )
  // }
  // const notFound=()=>{
  //   return(
  //     <h3>No items found with search {search}</h3>
  //   )
  // }

  return (
    <>
    <div>
      <center>
        <h3> Enter Recipe you are looking for</h3>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  /> <br/> <br/>
          <Button variant="contained" color="success" onClick={submitHandler}>Search</Button><br/>
        </form>
        {data.length>=1 ? <RecipeCard  data={data}/>:null}
        {/* {data.length>=1 ? found(): notFound()} */}

      </center>
    </div>
    </>
  )
}

export default Reciepe
