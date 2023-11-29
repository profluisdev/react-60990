import { Box, Button, Card, Typography } from "@mui/material";
import { useCount } from "../../hooks/useCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CardItem = ({ id, name, price, description, stock }) => {
  const { addProductCart } = useContext(CartContext);
  const { increment, decrement, count } = useCount(0, stock);

  

  return (
    <Card sx={{ maxWidth: 345, margin: 1, padding: 3 }}>
      <Typography variant="h5">{name}</Typography>
      <Typography color="text.secondary">{description}</Typography>
      <Typography color="text.secondary">Precio: ${price}</Typography>
      <Typography color="text.secondary">Stock: {stock}</Typography>
      <Box display="flex">
        <Button onClick={increment}>+</Button>
        <Typography> {count} </Typography>
        <Button onClick={decrement}>-</Button>
      </Box>
      <Button size="small" color="primary" variant="contained" onClick={() => addProductCart( {id, name, price}, count  )}  >
        Agregar al carrito
      </Button>
    </Card>
  );
};
