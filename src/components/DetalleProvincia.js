import React, { Component } from "react";
import Navigation from "./shared/Navigation";
import provsJson from "../data/lista_provincias.json";

class DetalleProvincia extends Component {
  constructor() {
    super();
    this.state = {
      provsJson,
    };
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  render() {
    const paramId = this.props.match.params.id;
    const prov = provsJson.filter(
        (prov) => prov.abreviatura === paramId
      )[0];
      const imgSrc = "/img/" + prov.bandera
    return (
      <div>
        <Navigation></Navigation>
        <table>
            <tr>
                <th> Provincia </th>
                <tr> {prov.provincia} </tr>
            </tr>
            <tr>
                <th> Abreviatura </th>
                <tr> {prov.abreviatura} </tr>
            </tr>
            <tr>
                <th> Capital </th>
                <tr> {prov.capital} </tr>
            </tr>
            <tr>
                <th> Bandera </th>
                <tr> <img src={imgSrc} alt="..." /> </tr>
            </tr>
            <tr>
                <th> Fecha Autonomía </th>
                <tr> {prov.fechaAutonomia} </tr>
            </tr>
            <tr>
                <th> Población </th>
                <tr> {prov.poblacion} </tr>
            </tr>
            <tr>
                <th> Superficie </th>
                <tr> {prov.superficie} </tr>
            </tr>
            <tr>
                <th> N° Departamentos </th>
                <tr> {prov.nroDepartamentos} </tr>
            </tr>
            <tr>
                <th> Tiene Puerto </th>
                <tr> {prov.tienePuerto === "Y" ? "SI" : "NO"} </tr>
            </tr>
        </table>
        <button onClick={this.goBack}>VOLVER</button>
      </div>
    );
  }
}

export default DetalleProvincia;
