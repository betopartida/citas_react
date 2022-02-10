import { useState, useEffect } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]) //arreglo vacio
  const [paciente, setPaciente] = useState({}) //objeto vacio

  useEffect(() => {
    const obtenerLS = () => {
      //si no encuentra el item devuelve un arreglo vacio
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS()

  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify( pacientes ))
    console.log('componente listo o cambió pacientes')
    
  }, [pacientes]);
  

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
    //console.log(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
