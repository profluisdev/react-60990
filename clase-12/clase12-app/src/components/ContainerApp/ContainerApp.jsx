
import { Button, Container, Paper, Stack, Typography } from "@mui/material"

export const ContainerApp = () => {
  return (
    <Container sx={ {backgroundColor: "#848484", padding: 5, color: "white" } } >
        <Stack spacing={3} >
        <Paper elevation={10} sx={{bgcolor: "#D8D8D8", padding: 3}} >
            <Typography color={"blue"} fontSize={30}  > Texto 1 </Typography>
            <Typography fontSize={20} fontFamily={"monospace"} > Texto 2 </Typography>
            <Button variant="contained" size="small" > Click </Button>
        </Paper>
        <Paper elevation={10} sx={{bgcolor: "#D8D8D8", padding: 3}} >
            <Typography color={"blue"} fontSize={30}  > Texto 1 </Typography>
            <Typography fontSize={20} fontFamily={"monospace"} > Texto 2 </Typography>
        </Paper>
        <Paper elevation={10} sx={{bgcolor: "#D8D8D8", padding: 3}} >
            <Typography color={"blue"} fontSize={30}  > Texto 1 </Typography>
            <Typography fontSize={20} fontFamily={"monospace"} > Texto 2 </Typography>
        </Paper>
        </Stack>
    </Container>
  )
}
