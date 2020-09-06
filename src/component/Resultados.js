import React from "react";
import styled from "styled-components";

const ContainerResultado = styled.h5`
  font-size: 25px;
  text-align: center;
`;

const Resultados = ({ numeros }) => {
  return (
    <div>
      <ContainerResultado>{numeros}</ContainerResultado>
    </div>
  );
};

export default Resultados;
