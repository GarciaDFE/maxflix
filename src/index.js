import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './index.css';
import Home from './pages/Home';
import CadastroVideo from "./pages/cadastro/Video"
import CadastroCategory from "./pages/cadastro/Categoria"

// Criar página 404 indicado pela Juliana
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route 
        path="/cadastro/video" 
        component={CadastroVideo} />
      <Route 
        path="/cadastro/categoria" 
        component={CadastroCategory} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);