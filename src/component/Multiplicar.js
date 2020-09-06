import React from "react";

const Multiplicar = ({ Multiplicar, estado, operacionDos }) => {
  return (
    <div>
      <h3>
        {Multiplicar} {estado} {operacionDos}
      </h3>
    </div>
  );
};

export default Multiplicar;
