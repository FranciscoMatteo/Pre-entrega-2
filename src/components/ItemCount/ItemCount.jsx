import React from 'react'
// Hook mas utilizado
// 1) Importamos el Hook:
import { useState } from 'react'



// Trabajamos con el estado
// Recuerden que es un objeto con informacion util para el componente

// El estado es un concepto de React, no de JS. Por eso para utilizarlo
// vamos a usar los Hooks, que ya vienen incorporados con la libreria.
//----------------------------------------------------------------------------

// 2) El Hook useState me va a retornar un array con 2 elementos.
// El primero es el estado actual, y el segundo una funcion que actualiza ese estado


const ItemCount = () => {

    const [contador, setContador] = useState(1);

    // 3) Creamos dos funciones para incrementar y decrementar el contador.

    const incrementar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };


  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={decrementar}> - </button>
    </div>
  )
}

// Incrementar y Decrementar van sin parentesis (en el mundo de react) porque si no se ejecutarian
//al momento de renderizar el unmountComponentAtNode. Y solo queremos que se ejecute cuando el usuario clickee los botones

export default ItemCount