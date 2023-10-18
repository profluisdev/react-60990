
import './App.css'

function App() {

  const name = "Juan";

  const arr = ["Luis", "Juan", "Dalma"];

  return (
    <div>
      <h1>Componente APP</h1>
      <h3>Nombre: {name} </h3>
      <hr />
        <ul>  
          {arr.map( element => <li>{element}</li>)}
        </ul>
    </div>
  )
}

export default App
