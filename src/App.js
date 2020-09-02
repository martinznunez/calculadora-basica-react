import React, { useState } from "react";
import styled from "styled-components";

// const Btn = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const Container = styled.div`
  margin: auto;
  width: 400px;
  height: 600px;
  background: gray;
`;
const Titulo = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const ContainerBtnl1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const ContainerBtnl2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const ContainerBtn = styled.button`
  font-size: 30px;
  padding: 24px;
  border-radius: 12px;
  background: blue;
`;

const ContainerInput = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`;

function App() {
  const [numeros, setNumeros] = useState(undefined);

  const obtenerValor = (e) => {
    setNumeros(e.target.name);

    console.log(numeros);
  };

  return (
    <Container>
      <Titulo>Calculadora</Titulo>
      <ContainerInput>
        <input type="text" />
      </ContainerInput>

      <ContainerBtnl1 onClick={obtenerValor}>
        <ContainerBtn name="comenzar" value="comenzar">
          C
        </ContainerBtn>
        <ContainerBtn name="dividir" value="dividir">
          %
        </ContainerBtn>
      </ContainerBtnl1>

      <ContainerBtnl1 onClick={obtenerValor}>
        <ContainerBtn name="9" value="9">
          9
        </ContainerBtn>
        <ContainerBtn name="7" value="8">
          8
        </ContainerBtn>
        <ContainerBtn value="7">7</ContainerBtn>
        <ContainerBtn value="multiplicar">X</ContainerBtn>
      </ContainerBtnl1>

      <ContainerBtnl1 onClick={obtenerValor}>
        <ContainerBtn value="6">6</ContainerBtn>
        <ContainerBtn value="5">5</ContainerBtn>
        <ContainerBtn value="4">4</ContainerBtn>
        <ContainerBtn value="restar">-</ContainerBtn>
      </ContainerBtnl1>

      <ContainerBtnl2 onClick={obtenerValor}>
        <ContainerBtn value="0">0</ContainerBtn>
        <ContainerBtn value="igual">=</ContainerBtn>
        <ContainerBtn value="sumar">+</ContainerBtn>
      </ContainerBtnl2>
    </Container>
  );
}

export default App;
