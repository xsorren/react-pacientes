import Paciente from "./Paciente";
const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-red-600 font-bold ">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              key={paciente.id}
              paciente={paciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl text-center font-black ">No hay pacientes</h2>
          <p className="text-xl mb-10 mt-5 text-center">
            Añade pacientes {""}
            <span className="text-red-600 font-bold ">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
