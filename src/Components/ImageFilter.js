import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icon } from "../Components/ui";

export default (type) => {
  const Images = {
    Restaurante: (
      <Icon>
        <use xlinkHref={`${alimentacao}#Capa_1`} />
      </Icon>
    ),
    Utilizades: (
      <Icon>
        <use xlinkHref={`${utilidades}#Capa_1`} />
      </Icon>
    ),
    Saude: (
      <Icon>
        <use xlinkHref={`${saude}#Capa_1`} />
      </Icon>
    ),
    Transporte: (
      <Icon>
        <use xlinkHref={`${transporte}#Capa_1`} />
      </Icon>
    ),
    default: (
      <Icon>
        <use xlinkHref={`${outros}#Capa_1`} />
      </Icon>
    ),
  };

  return Images[type] || Images.default;
};
