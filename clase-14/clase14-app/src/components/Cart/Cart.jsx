import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Form } from "../Form/Form";

export const Cart = () => {
  const { cart, total, removeProduct } = useContext(CartContext);

  return (
    <Box marginTop={4}>
      <Typography fontSize={25}>Carrito</Typography>
      <Box display="flex" flexDirection="column" >
        {cart.map((item) => (
          <Box key={item.id} margin={1} border={1} borderColor={"gray"} borderRadius={2} padding={3} width={380} boxShadow={3}>
            <Typography>Nombre: {item.name} </Typography>
            <Typography>Precio Unitario: {item.price} </Typography>
            <Typography>Cantidad: {item.quantity} </Typography>
            <Typography>Sub total: {item.subTotal} </Typography>
            <Button variant="contained" color="error" onClick={() => removeProduct(item.id)}>
              Eliminar
            </Button>
          </Box>
        ))}
      </Box>
      <Typography> Total de la compra ${total} </Typography>
      <Form />
    </Box>
  );
};
