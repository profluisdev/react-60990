import styles from "./styles.module.css"

export const EstilosCondicionales = ( {status} ) => {

  return (
    <div>
        <h3 style={ { color: status ? "green" : "red" } } > Estilo condicional en linea </h3>
        <h3 className={ status ? "text-primary" : "text-secondary" } > Estilo condicional en linea bootstrap </h3>
        <h3 className={ status ? styles.colorOrange : styles.colorBlue } > Estilo condicional en linea css module </h3>
    </div>
  )
}
