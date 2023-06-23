import styled from './Main.module.css'
import { useState, useEffect, useCallback } from 'react'
import { MobileHeader } from '../../header/Header'
import useMediaSize from '../../../hooks/useMediaSize'
import LogoNFG from '../../Logo/LogoNFG'
import { useThemeStore } from '../../../store/useThemeStore'
import MobileMenu from '../../menu/MobileMenu'
import DesktopHeader from '../../header/DesktopHeader'
import { Rotate as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
const contentful = require('contentful')
export default function Main({ children }) {
  const theme = useThemeStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [media, setMedia] = useState('mobile')
  const [data, setData] = useState()
  useEffect(() => {
    (window.innerWidth > 992) ? setMedia('desktop') : setMedia('mobile')
  })
  const LocalPages = [
    {
      title: 'Menu',
      url: '/menu'
    },
    {
      title: 'Restaurant',
      url: '/restaurant'
    },
    {
      title: '(201) 260-0364',
      url: "tel:+12013600364"
    },

  ]
  const handleCloseMobileMenu = () => {
    setMenuOpen(false)
  }
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
          <MobileMenu isOpen={menuOpen}>
            {LocalPages.map((val, key) => <Link href={val.url}><h2 className={styled.mobileH2} key={key}>{val.title}</h2></Link>)}
          </MobileMenu>
        </div>
        :
        <div>
          <DesktopHeader
            background={theme.blue}
            right={
              LocalPages.map((val, key) => <Link className={styled.menuLinksYellow} href={val.url}>{val.title}</Link>)
            }
            left={<LogoNFG height={50} width={100} />}
          />
        </div>
      }
      <div className={styled.body}>
        {children}
      </div>
    </>
  )
}
