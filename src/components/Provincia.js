import React, { Component } from "react";
import '../assets/css/Provincia.css';

class Provincia extends Component {
  render() {
    const imgSrc = "/img/" + this.props.bandera
    const linkDetalleProvincia = "/detalle-provincia/" + this.props.abreviatura
    return (
      <div>
        <table border="1" style={{ width: '150px', margin:'10px' }} className="tabla-provincia">
            <tbody>
                <tr> <td style={{color:'green'}}> {this.props.provincia} </td> </tr>
                <tr> <td> <img src={imgSrc} alt="..." /> </td> </tr>
                <tr> <td style={{fontWeight:'bold'}}>  Capital - {this.props.capital} </td> </tr>
                <tr> <td> <a href={linkDetalleProvincia} className="btn btn-secondary">VER MAS</a> </td> </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Provincia;
