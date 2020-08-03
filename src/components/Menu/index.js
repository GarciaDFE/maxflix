import React from "react"
import { Link } from "react-router-dom"

import "./styles.css"
import Logo from "../../assets/img/logo.png"
import Button from "../../objects/Button"

const Menu = () => {
   return (
      <nav className="menu">
         <Link href="/">
            <img  className="logo" 
                  src={Logo} 
                  alt="Logo da Aluraflix" />
         </Link>
         <Button as={Link} to="cadastro/video">
               Novo vídeo
         </Button>
      </nav>
   )
}

export default Menu