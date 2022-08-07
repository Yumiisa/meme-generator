import React, {useState, useEffect} from 'react'
import "./Meme.css"
import memesData from '../data/memesData'
import axios from 'axios'

const Meme = () => {
  const [meme, setMeme]=useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"})
const [allMemeImages, setAllMemeImages]=useState([])
useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
  .then(res=>res.json())
  .then(data=>setAllMemeImages(data.data.memes))
}, [])
    
function getMemeImage() {
        
       const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
         
    }
    const handleChange=(event =>{
      const {name, value}=event.target
      setMeme(prevMeme=>({...prevMeme,[name]:value}))
    })
  return (
    <main>
   <div className="form">
    <input type="text" 
    placeholder='top-text' 
    value={meme.topText}
    name="topText"
    onChange={handleChange}
    className='form--input'/>
    <input type="text" 
     placeholder="bottom-text" 
     value={meme.bottomText}
     name="bottomText"
     onChange={handleChange}
     className='form--input'/>
    <button className='form--button' onClick={getMemeImage}> Get a new meme image 🖼  </button>

</div>
<div className="meme">
  <img src={meme.randomImage} alt='#' className='meme--image'/>
  <h1 className="meme--text top">{meme.topText}</h1>
  <h1 className="meme--text bottom">{meme.bottomText}</h1>
</div>


   </main>
  )
}

export default Meme
