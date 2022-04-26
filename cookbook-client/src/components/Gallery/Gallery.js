import React,{useState} from 'react'
import {imageData} from '../../actions/index'
import {Button} from '@mui/material'
import GalleryCard from './GalleryCard'

const Gallery = () => {
  const [search,setSearch] = useState('food');
  const [data,setData] = useState([]);
  
  const submitHandler = async(e) =>{
    e.preventDefault();
    console.log(search)
    const res= await imageData(search)
    console.log(res.data.results)
    if(res.data.results){
      setData(res.data.results)
    }  
  }

  return (
    <>
    <div>
      <center>
        <h2> Search here......</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  /> <br/> <br/>
          <Button variant="contained" color="success" onClick={submitHandler}>Search</Button><br/>
        </form>
        {data.length>=1 ? <GalleryCard  data={data}/>:null}

      </center>
    </div>
    </>
  )
}

export default Gallery
