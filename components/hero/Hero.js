import styled from './hero.module.css'
export default function Hero({height, background}){
    return(
        <div className={styled.container} style={{height:height, background:background}}>

        </div>
    )
}