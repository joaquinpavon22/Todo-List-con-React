import React, { useState } from 'react'


export default function Tarea(props) {
    const { tarea,onBorrarTarea} = props
    
   

    return (
        <>
            <div className='contenedorTarea' id={tarea.id}>
               
            <span>{tarea.tarea}</span>
              
            

                <button className='btn btnBorrar'
                onClick={()=>onBorrarTarea(tarea.id)}>
                    BORRAR
                </button>
        



               
            </div>


        </>);


}
