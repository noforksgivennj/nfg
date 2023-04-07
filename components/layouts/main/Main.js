import styled from './Main.module.css'
import { useState, useEffect, useCallback } from 'react'
import { MobileHeader } from '../../header/Header'
import useMediaSize from '../../../hooks/useMediaSize'
import LogoNFG from '../../Logo/LogoNFG'
import { useThemeStore } from '../../../store/useThemeStore'
import MobileMenu from '../../menu/MobileMenu'
import DesktopHeader from '../../header/DesktopHeader'
import Link from 'next/link'
import { Rotate as Hamburger } from 'hamburger-react'
import Image from 'next/image'
const contentful = require('contentful')


export default function Main({ children }) {
  const theme = useThemeStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [media, setMedia] = useState('mobile')

  const [data , setData] = useState()

  

const client = contentful.createClient({
  space: 'vryryxwbv6r1',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'iELaU9bgW1qLMPIPWOr3Z2vCl8iXk3ADMFtsOJvE0TM'
})



  useEffect(()=>{
   ( window.innerWidth > 992) ? setMedia('desktop') : setMedia('mobile')

   client.getEntry('6XBuhTs8Qgc01n6GoBnLSG')
.then((entry) => setData(entry))
.catch(console.error)
  },[])

  console.log(data)
  

  const testLocalPages = [
    {
      title: 'About', 
      url: './About'
    },
    {
      title: 'Example One', 
      url: './example-one'
    },
    {
      title: 'Example Two', 
      url: './example-one'
    },
    {
      title: 'Example Three', 
      url: './example-one'
    },
    
  
]


console.log(data)
  return (

<>

    
      {media === 'mobile' ?
        <div>
          <MobileHeader
            center={<LogoNFG height={50} width={100} />}
            background={theme.blue}
            left={<Hamburger
              color={theme.gold}
              onToggle={toggled => {
                if (toggled) {
                  setMenuOpen(true)
                } else {
                  setMenuOpen(false)
                }
              }}
            />
            }
          />
          <MobileMenu isOpen={menuOpen} />
        </div>

        :

        <div>
          <DesktopHeader 
          background={theme.blue}
          right={
            testLocalPages.map((val,key)=> <Link className={styled.menuLinksYellow} href={val.url}>{val.title}</Link>)
          }
          left={<LogoNFG height={50} width={100} />}
          />
        </div>
      }
      <div className={styled.body}>
        {children}
      </div>

      <div>
        {/* <Image width={300} height={300} src={{`https://${data?.fields.specialPhotos[0].fields.file.url}`} /> */}
        {data?.fields.seasonalSpecials}
      </div>
    </>


  )
}

