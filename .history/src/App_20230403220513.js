import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";


function App() {

  const [homeValue, setHomeValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}> 
          
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result /> 

          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
