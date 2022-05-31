import { useState, useEffect } from 'react'
import ListaPacientes from "./components/ListaPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"


function App() {
  const [paciente, setPaciente] = useState({});
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const deletePaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="mx-auto container mt-20">

      <Header />

      <div className="md:flex mt-12">
          <Formulario 
            paciente={paciente}
            setPaciente={setPaciente}
            pacientes={pacientes}
            setPacientes={setPacientes}

          />
          <ListaPacientes 
            pacientes={pacientes}
            deletePaciente={deletePaciente}
            setPaciente={setPaciente}
          />
      </div>

    </div>
  )
}


export default App
