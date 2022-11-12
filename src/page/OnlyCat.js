import React, { useEffect, useState } from 'react'
import LoadingBar from "react-top-loading-bar"
import { useLocation } from 'react-router-dom';
const OnlyCat = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
const [breed, setBreed] = useState([]);
const [progress, setProgress] = useState(0);
  const  updateNews = async()=>{
    setProgress(10)
    const url = `https://api.thecatapi.com/v1/images/${id}`;
    setProgress(30)
    let data = await fetch(url);
    setProgress(60)
    let parsedData = await data.json()
    setProgress(80)
    console.log(parsedData);
    setBreed(parsedData);
    setProgress(100)
    // console.log(breed.breeds[0].name);
  }

  useEffect(() => {
    updateNews();
  }, []);



  return (
    <>
     <LoadingBar
        height={3}
        color='#1a88ef'
        progress={progress}
        /> 
    <div className="card" style={{width: "50vw", margin:"80px 0px 0px 25vw",height:"60vh" }}>
  <img src={breed.url} className="card-img-top" alt="..." style={{}} />
  <div className="card-body">
    <h5 className="card-title">{breed.breeds ? breed.breeds[0].name : "Bengals" }</h5>
    <p className="card-text">{breed.breeds ? breed.breeds[0].description : "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it."  }</p>
    <p><b>Origin:</b> {breed.breeds ? breed.breeds[0].origin  : "United States" }</p>
    <p><b>Country:</b> {breed.breeds ? breed.breeds[0].country_codes : "US" }  </p>

  </div>
</div>
    </>
  )
}

export default OnlyCat