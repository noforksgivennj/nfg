import styled from './DesktopHeader.module.css'
export default function DesktopHeader({left , right , background}){
    return(
        <div className={styled.container} style={{background:background}}>
          <div className={styled.containerFlexLeft}>{left}</div>
          <div className={styled.containerFlexRight}>{right}</div>

        </div>
    )
}