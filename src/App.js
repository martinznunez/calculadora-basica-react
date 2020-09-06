import React, { useState } from "react";
import styled from "styled-components";
import Resultados from "./component/Resultados";
import Multiplicar from "./component/Multiplicar";
import Imprimir from "./component/Imprimir";

const Container = styled.div`
  margin: auto;
  width: 400px;
  height: auto;
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
  background: ${(props) => (props.primary ? "blue" : "green")};
`;

const ContainerInput = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`;

function App() {
  const [numero, setNumero] = useState(null);
  const [estado, setEstado] = useState(null);

  const [numeros, setNumeros] = useState([]);
  const [multiplicar, setMultiplicar] = useState(null);

  const [operacionDos, setOperacionDos] = useState();

  const obtenerValor = (e) => {
    setNumero(e.target.value);

    if (e.target.value) {
      setNumeros([...numeros, e.target.value]);
    }
  };

  const operacionMultiplicar = () => {
    setEstado("*");
    setMultiplicar(numeros);
    setNumeros("");
  };

  const operacionRestar = () => {
    setEstado("-");
    setMultiplicar(numeros);
    setNumeros("");
  };

  const operacionSumar = () => {
    setEstado("+");
    setMultiplicar(numeros);
    setNumeros("");
  };

  const OperacionDvidir = () => {
    setEstado("/");
    setMultiplicar(numeros);
    setNumeros("");
  };

  const operacionIgual = () => {
    let segundo = numeros;

    if (estado === "*") {
      setOperacionDos(multiplicar.join("") * segundo.join(""));
    } else if (estado === "/") {
      setOperacionDos(multiplicar.join("") / segundo.join(""));
    } else if (estado === "-") {
      setOperacionDos(multiplicar.join("") - segundo.join(""));
    } else if (estado === "+") {
      setOperacionDos(Number(multiplicar.join("")) + Number(segundo.join("")));
    }

    setMultiplicar("");
    setEstado("");

    setNumeros("");
  };

  console.log(operacionDos);

  const Reset = () => {
    setOperacionDos("");
    setNumeros("");
    setMultiplicar("");
    setEstado("");
  };

  return (
    <Container>
      <Titulo>Calculadora</Titulo>

      <ContainerInput>
        <Resultados numeros={numeros} />

        <Multiplicar Multiplicar={multiplicar} estado={estado} />
      </ContainerInput>
      {operacionDos ? <Imprimir operacionDos={operacionDos} /> : null}

      <ContainerBtnl1>
        <ContainerBtn onClick={Reset}>C</ContainerBtn>
      </ContainerBtnl1>

      <ContainerBtnl1>
        <ContainerBtn onClick={operacionMultiplicar} value="X">
          X
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="9">
          9
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="8">
          8
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="7">
          7
        </ContainerBtn>
        <ContainerBtn onClick={OperacionDvidir}>/</ContainerBtn>
      </ContainerBtnl1>

      <ContainerBtnl1>
        <ContainerBtn onClick={obtenerValor} value="6">
          6
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="5">
          5
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="4">
          4
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="3">
          3
        </ContainerBtn>

        <ContainerBtn onClick={operacionRestar} value="-">
          -
        </ContainerBtn>
      </ContainerBtnl1>

      <ContainerBtnl2>
        <ContainerBtn onClick={obtenerValor} value="2">
          2
        </ContainerBtn>
        <ContainerBtn onClick={obtenerValor} value="1">
          1
        </ContainerBtn>

        <ContainerBtn onClick={obtenerValor} value="0">
          0
        </ContainerBtn>
        <ContainerBtn onClick={operacionIgual}>=</ContainerBtn>
        <ContainerBtn onClick={operacionSumar}>+</ContainerBtn>
      </ContainerBtnl2>
    </Container>
  );
}

export default App;
