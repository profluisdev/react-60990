import { useState } from "react";
import { createContext } from "react";
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [changes, setChanges] = useState(true);

  const getProductsDB = (category) => {
    // Configuración de colección y filtramos por categoría
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    // Traemos los documentos de la base de datos
    getDocs(myProducts).then((resp) => {
      // Creamos un array con los los productos acomodados por id y la información del documento de firebase
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // Guardamos la lista de productos en el state products
      setProducts(productList);
    });
  };

  const getProductById = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
      }
    });
  };

  const addProductDB = (product) => {
    // Se puede agregar validaciones para que los productos agregados en la base de datos
    // se guarden con toda la información necesaria y todos los productos sean iguales
    addDoc(collection(db, "products"), product);
    setChanges(!changes);
  };

  const addOrderDB = (order) => {
    addDoc(collection(db, "orders"), order);
    setChanges(!changes);
  }

  // Opcional
  const discountStock = async (product, quantity) => {
    const productRef = doc(db, "products", product.id);
    const newStock = product.stock - quantity;
    await updateDoc(productRef, { stock: newStock });
    setChanges(!changes);
  };

  const objetValue = {
    products,
    product,
    changes,
    getProductsDB,
    getProductById,
    addProductDB,
    discountStock,
    addOrderDB
  };
  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};
