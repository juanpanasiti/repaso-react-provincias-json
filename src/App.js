import React from 'react';
import './assets/css/App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import DetalleProvincia from './components/DetalleProvincia';
import MapaArgentina from './components/MapaArgentina';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/con-puerto">
            <Home></Home>
        </Route>
        <Route exact path="/busqueda/:superficie" component={Home}/>
        <Route exact path="/detalle-provincia/:id" component={DetalleProvincia}/>
        <Route exact path="/mapa" component={MapaArgentina}/>
    </Switch>
    </div>
  );
}

export default App;
