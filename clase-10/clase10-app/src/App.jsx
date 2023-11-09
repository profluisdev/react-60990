import { useState } from "react";

export const App = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  const handleInputKeyDown = (e) => {
    const vocals = ["a", "e", "i", "o", "u"];
    const key = e.key.toLowerCase();
    if (vocals.includes(key)) {
      console.log(`Se introdujo la vocal: ${key}`);
      e.preventDefault(); // Bloqueamos el evento onKeyDown
    }
  };
  const handleInputDni = (e) => {
    if (e.key.includes(".")) {
      console.log("No se incluyo el punto");
      e.preventDefault(); // Bloqueamos el evento onKeyDown
    }
  };

  // ---------- Formulario ------------------

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [students, setStudents] = useState([]);

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleStudentsFrom = (e) => { 
      e.preventDefault();

      const newStudent = {
        name,
        lastName
      }

      setStudents([...students, newStudent])
      setName("")
      setLastName("")
   }
  

  return (
    <div className="container mt-3">
      <label htmlFor="">Ingrese texto</label>
      <input className="form-control mt-3s" type="text" onChange={handleInputChange} />
      <label htmlFor="">Vocales</label>
      <input className="form-control mt-3s" type="text" onKeyDown={handleInputKeyDown} />
      <label htmlFor="">DNI</label>
      <input className="form-control mt-3s" type="number" onKeyDown={handleInputDni} />

      <hr />

      <form onSubmit={handleStudentsFrom} className="col-5">
        <label htmlFor="">Nombre</label>
        <input className="form-control" type="text" value={name} onChange={handleInputName} />
        <label htmlFor="">Apellido</label>
        <input className="form-control" type="text" value={lastName} onChange={handleInputLastName} />
        <input className="btn btn-outline-success mt-2" type="submit" value="Agregar" />
      </form>
      <h2>Alumnos a desaprobar</h2>
      <ul>
        {students.map( (student, index) => <li key={index}> {student.name} {student.lastName} </li> )}
      </ul>
    </div>
  );
};
