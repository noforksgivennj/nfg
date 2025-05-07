import { GrInstagram } from 'react-icons/gr';
import Main from "../components/layouts/main/Main";
import LogoNFG from '../components/Logo/LogoNFG';

import styled from '../styles/Home.module.css';

import { IconContext } from "react-icons";


export default function Home() {

  return (
    <IconContext.Provider value={{ size: "3rem" }}>
      <Main>
        <div className={styled.home}>
          <div className={styled.tempHero}>
            <LogoNFG width={350} />
            <div>
              <button onClick={() => { window.location.href = 'https://www.instagram.com/noforksgivennj/' }}><GrInstagram /></button>
            </div>

          </div>
        </div>

      </Main>
    </IconContext.Provider>
  )
}
