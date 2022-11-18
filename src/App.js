

import './App.css';
import Tarea from "./components/Tarea"
import React, { useState } from 'react';
import Formulario from './components/Formulario';



 function App() {

  const [tarea,setTarea] = useState("")
  const [listadorTareas,setListadoTareas]=useState([])

  function handleSumbit(e){
    e.preventDefault()
    if(tarea === ""){
      alert ("DEBES PONER UNA TAREA")
      return
    }

    const nuevaTarea = {
      id:Date.now(),
      tarea: tarea,
      completado: false
    }
    const temp = [nuevaTarea, ...listadorTareas]
    setListadoTareas(temp)

    setTarea("")
    
    console.log(listadorTareas)
  }

  function handleChange (e){
    setTarea(e.target.value)
    console.log(tarea)
  }

function onBorrarTarea(id){
  const temp = listadorTareas.filter(item=>item.id !==id)
  setListadoTareas(temp)
}

  return (
    <>
     <div className='contenedorPrincipal'>
      <h1>Todo-List</h1>
      <div className='contenedorFormulario'>
        <Formulario 
        tarea = {tarea}
        handleSumbit={handleSumbit}
        handleChange={handleChange}

        
        />
      </div>
      <div className='ContenedorTareas'>
        <h2>Lista de Tareas</h2>
        <div className='contenedorInfoTareas'>
          {
            listadorTareas.map(tarea=>(
              <Tarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea}
              onBorrarTarea={onBorrarTarea}/>
            ))
          }
        </div>
      </div>
      </div> 


    </>
  )
}




export default App

