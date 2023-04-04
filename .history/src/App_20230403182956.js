import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container> 
          
          <Grid item></Grid>

        <SliderSelect />
        <TenureSelect />
        <Result />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
