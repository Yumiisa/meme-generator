import React from 'react'
import './Header.css';



const Header = () => {
  return (
    <header className='header'> 
        <img src="./meme.jpeg" alt='cat' className='header--image'/>
        <h2 className='header--title'>meme generator</h2>
        <h4 className='header--project'>React Course-project</h4>
    </header>
  )
}

export default Header