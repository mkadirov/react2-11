import BarChart from "./components/Charts/BarChart";
import LineChart from "./components/Charts/LineChart";
import PolarAreaChart from "./components/Charts/PolarAreaChart";
import AreaChart from "./components/Charts/AreaChart";
import {Card, Box, Container, Grid} from '@mui/material'


function App() {
  return (
    <>
      <Container>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} md={6}>
            <LineChart/>
          </Grid>
          <Grid item xs={12} md={6}>
          <BarChart/>
          </Grid>
          <Grid item xs={12} md={8}>
            <PolarAreaChart/>
          </Grid>
          <Grid item xs={12} md={8}>
           <AreaChart/>
          </Grid>
        </Grid>
        
        
        
        
        
      </Container>
    </>
  );
}

export default App;
