import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/cerulean/bootstrap.min.css';

/*El Modulo React-router-dom es para poder crear y usar rutas */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
/*Toast es para mandar mensajes entre rutas */
import { ToastContainer } from 'react-toastify';

import Navbar from './components/NavBar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
            
      <div>
      <Switch>
        <Route exact path="/" component={VideoList}></Route>
        {/* Ruta HOME ,hay que usar exact obligatoriamente*/}
        {/*  */}
        <Route path="/newVideo" component={VideoForm} ></Route>
        <Route path="/update/:id" component={VideoForm} ></Route>
      </Switch>
      {/* Toast Container parece que necesitaba estar dentro de un div¿? */}
      <ToastContainer />
      </div>
    
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


