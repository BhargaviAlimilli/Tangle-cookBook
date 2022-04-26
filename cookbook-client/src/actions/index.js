import axios from 'axios'

export const recipeData= async(search)=>{
    const response= await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.REACT_APP_ED_APP_ID}&app_key=${process.env.REACT_APP_ED_API_KEY}`)
    return response
}

export const imageData=async(search)=>{
    console.log(process.env.REACT_APP_U_API_KEY)
    const resp= await axios.get(`https://api.unsplash.com/search/photos?query=${search}&client_id=${process.env.REACT_APP_U_API_KEY}`)
    return resp
}



