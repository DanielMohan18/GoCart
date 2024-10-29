import React, { useEffect, useState } from 'react'
import lightPNG from "../../assets/light-mode-button.png"
import darkPNG from "../../assets/dark-mode-button.png"
const DarkMode = () => {
    const [theme,setTheme] =useState(
        localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
    )
    const element =document.documentElement;
    
    useEffect(()=>{
     if(theme==="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark")
     }else{
        element.classList.remove("dark");
        localStorage.setItem("theme","light") 
     }
    },[theme]);

  return (
    <div className='relative'>
      <img onClick={()=>{setTheme(theme==="light"?"dark":"light")}} src={lightPNG} className={`w-12  cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme==="light"?"opacity-100":"opacity-0"}`} alt="light"></img>
      <img onClick={()=>{setTheme(theme==="light"?"dark":"light")}} src={darkPNG} alt="dark" className='w-12  cursor-pointer transition-all duration-300 '></img>
    </div>
  )
}

export default DarkMode
