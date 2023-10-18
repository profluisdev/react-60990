// rafc <--- comando para crear componentes rápidamente

// Importamos el archivo css module
import styles from "./app.module.css"

export const App = () => {
  let name = "Juan";
  return (
    // <div style={{color: "red"}} >Nombre: {name}</div>
    // <div className={`${styles.nameColor} ${styles.fontName}`} >Nombre: {name}</div>
    <div className="mt-5 ms-5 text-white" >Nombre: {name}</div>
  )
}
