// import React from 'react'

// creamos un componente mensaje
// le pasamos en params un mensaje con nombre "message"
const Mensaje = (params) => {

   //le pasamos por params un estilo css 
   return <h1 style={{ color: params.color }}>{params.message}</h1>
}

export default Mensaje