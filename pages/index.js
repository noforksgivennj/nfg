import {useState, useEffect, useCallback} from 'react'
import Main from "../components/layouts/main/Main";
import LogoNFG from '../components/Logo/LogoNFG';

import styled from '../styles/Home.module.css'


// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker"

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Main>
      <div className={styled.home}>
        <div className={styled.tempHero}>
        <LogoNFG width={350}/>
        <div>
         <button onClick={()=>{window.location.href = 'https://www.instagram.com/noforksgivennj/'}}>Check Us Out</button>
        </div>

        </div>
      </div>

    </Main>
  )
  }
