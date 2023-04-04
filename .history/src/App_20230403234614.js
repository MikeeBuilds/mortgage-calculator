import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";


function App({ data, setData}) {


  const [data, setData] = useState(
    {
      homeValue: 3000,
      downPayment: 50000,
      loanAmount: 1000,
      loanTerm: 3000,
    });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}> 
          
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
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
