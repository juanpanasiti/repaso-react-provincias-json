import React, { Component } from "react";
import Navigation from "./shared/Navigation";
import provsJson from "../data/lista_provincias.json";
import Provincia from "./Provincia";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      provsJson,
    };
  }
  render() {
    const url = window.location.href;
    let parametro = "";
    this.props.match.params.superficie
      ? (parametro = this.props.match.params.superficie)
      : (parametro = "");
    console.log(parametro);

    const provincias = this.state.provsJson.map((provincia, i) => {
      if (url.includes("/con-puerto")) {
        if (provincia.tienePuerto === "Y") {
          return (
            <div className="col-3">
              <Provincia
                key={provincia.abreviatura}
                abreviatura={provincia.abreviatura}
                provincia={provincia.provincia}
                bandera={provincia.bandera}
                capital={provincia.capital}
              ></Provincia>
            </div>
          );
        } else {
          return null;
        }
      } else if (url.includes("/busqueda/")) {
          if(parseInt(provincia.superficie) >= parseInt(parametro)){
            return (
                <div className="col-3">
                  <Provincia
                    key={provincia.abreviatura}
                    abreviatura={provincia.abreviatura}
                    provincia={provincia.provincia}
                    bandera={provincia.bandera}
                    capital={provincia.capital}
                  ></Provincia>
                </div>
              );
          } else {
              return(null)
          }
      } else {
        return (
          <div className="col-3">
            <Provincia
              key={provincia.abreviatura}
              abreviatura={provincia.abreviatura}
              provincia={provincia.provincia}
              bandera={provincia.bandera}
              capital={provincia.capital}
            ></Provincia>
          </div>
        );
      }
    });
    return (
      <div>
        <Navigation></Navigation>
        <div className="row">{provincias}</div>
      </div>
    );
  }
}

export default Home;
