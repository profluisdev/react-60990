import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      description,
      stock,
    };
    addProductDB(newProduct);
    setName("");
    setEmail("");
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={400} component="form" onSubmit={handleForm}>
      <Stack spacing={3}>
        <TextField label={"Nombre"} value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button variant="contained" color="success">
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};
