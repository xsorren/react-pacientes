import { useState, useEffect } from 'react';
import Error from './Error'
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)



    useEffect(() => {
        if( Object.keys(paciente).length > 0  ) {
            setNombre(paciente.nombre)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

 // Validación
        if( [ nombre, email, fecha, sintomas ].includes('') ) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        } 
        
        setError(false)


// Paciente
        const objetoPaciente = {
            nombre, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            // Editar
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
     // Nuevo 
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reiniciar
        setNombre('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Agrega Pacientes y {''}
                <span className="text-red-600 font-bold ">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 font-bold uppercase">
                        Nombre
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />  
                </div>


                <div className="mb-5">
                    <label htmlFor="email" className="block uppercase text-gray-700 font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />  
                </div>


                <div className="mb-5">
                    <label htmlFor="alta" className="block uppercase text-gray-700 font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />  
                </div>


                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>


                <input
                    type="submit"
                    className="bg-red-600 w-full uppercase p-3 text-white font-bold cursor-pointer transition-colors hover:bg-red-700"
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                />
            </form>
        </div>
    )
}

export default Formulario
