import styled from './mobileMenu.module.css'
export default function MobileMenu({isOpen}){
    return(
        <div className={isOpen ? styled.containerOpen : styled.containerClose}>

        </div>
    )
}