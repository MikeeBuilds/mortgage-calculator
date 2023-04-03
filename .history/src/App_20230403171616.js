import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={}>
        <SliderSelect />
        <TenureSelect />
        <Result />
      </Container>
    </div>
  );
}

export default App;
