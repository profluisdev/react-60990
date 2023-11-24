import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Button, Typography } from "@mui/material";

import { collection, getDocs, query, where } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CardItem } from "../CardItem/CardItem";
import { CartContext } from "../../context/CartContext";
import { seedProductsDb } from "../../utils/seedProductsDb";

export const Products = () => {
  const { totalProducts } = useContext(CartContext)
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    getProductsDB();
    
  }, []);

  return (
    <>
      <Box component="nav" display="flex" justifyContent="space-around">
        <Button variant="contained" color="inherit" onClick={() => getProductsDB()}>
          Home
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("calzados")}>
          Calzados
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("ropa")}>
          Ropa
        </Button>
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography> {totalProducts} </Typography>
        </Box>
      </Box>
      <Typography fontSize={25} marginBottom={3}>
        Productos
      </Typography>
      <Box component="div" display="flex" flexWrap="wrap">
        {products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};
