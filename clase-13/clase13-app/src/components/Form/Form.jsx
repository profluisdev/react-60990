import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebaseConfig";

export const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const handleForm = (e) => { 
        e.preventDefault()
      const newProduct = {
        name,
        img: "url",
        price,
        description,
        stock
      }

      addDoc(collection(db, "products"), newProduct );
      setName("");
      setPrice(0);
      setCategory("");
      setDescription("");
      setStock(0);

   }

  return (
    <form className="d-flex flex-column" onSubmit={handleForm}>
      <label htmlFor="">Nombre</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="">Precio</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label htmlFor="">Categoría</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <label htmlFor="">Descripción</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label htmlFor="">Stock</label>
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};
