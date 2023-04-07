import {useState, useEffect, useCallback} from 'react'
import Main from "../components/layouts/main/Main";
import HomeCarousel from '../components/carousel/HomeCarousel';
import styled from '../styles/Home.module.css'
export default function Home() {
  const [media , setMedia] = useState('mobile')
  const [width , setWidth] = useState()

  useEffect(()=>{
    window.addEventListener('resize', (e)=> setWidth(e.target.width))
    if(window.innerWidth > 991){
      setMedia('desktop')
    }
  
  },[])

    console.log(width)


  return (
    <Main>
  
      <HomeCarousel />
    
      <div className={styled.flexHeader}>
        <h1>No Forks Given</h1>
      </div>
    </Main>
  )
  }
