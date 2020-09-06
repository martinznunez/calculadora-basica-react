import React from "react";
import styled from "styled-components";

const ContainerResultado = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`;
const TituloResultado = styled.h2`
  font-size: 40px;
`;

const Imprimir = ({ operacionDos }) => {
  return (
    <ContainerResultado>
      <TituloResultado> {operacionDos}</TituloResultado>
    </ContainerResultado>
  );
};

export default Imprimir;
