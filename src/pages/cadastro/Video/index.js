import React from 'react';
import { Link } from "react-router-dom"
import LayoutDefault from "../../../components/LayoutDefault"

const CadastroVideo = () => {
   return (
      <LayoutDefault>
         <h1>Cadastro vídeo</h1>
         <Link to="/cadastro/categoria">
            Cadastro Categoria
         </Link>
      </LayoutDefault>
   )
}

export default CadastroVideo