import React from "react"

import "./styles.css"
import Logo from "../../assets/img/logo.png"
import Button from "../../objects/Button"

const Menu = () => {
   return (
      <nav className="menu">
         <a href="/">
            <img  className="logo" 
                  src={Logo} 
                  alt="Logo da Aluraflix" />
         </a>
         <Button as="a" target="/">
               Novo vídeo
         </Button>
      </nav>
   )
}

export default Menu