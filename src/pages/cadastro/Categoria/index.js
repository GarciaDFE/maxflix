import React from 'react';
import { Link } from "react-router-dom"
import LayoutDefault from "../../../components/LayoutDefault"

const CadastroCategory = () => {
   return (
      <LayoutDefault>
         <h1>Cadastro Categoria</h1>
         <Link to="/">Voltar para Home</Link>
      </LayoutDefault>
   )
}

export default CadastroCategory