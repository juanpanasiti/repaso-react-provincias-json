import React, { Component } from "react";
import Navigation from "./shared/Navigation";

class MapaArgentina extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div style={{color:'blue', fontSize:'25px', fontWeight:'bold'}}>República Argentina</div>
        <img src="/img/argentina.png" alt="..." />
      </div>
    );
  }
}

export default MapaArgentina;
