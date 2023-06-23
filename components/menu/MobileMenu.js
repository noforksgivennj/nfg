import styled from './mobileMenu.module.css'
export default function MobileMenu({isOpen , children}){
    return(<>
        {
            isOpen &&
            <div className={isOpen ? styled.containerOpen : styled.containerClose}>
                <div className={styled.flexMenu}>
                    {children}
                    </div>
            </div>
       
        
        }
        </>
    )
}