import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ChartPie from "./components/pieChart/ChartPie";
import { LineChart } from "./components/lineChart/LineChart";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChartPie />
    </>
  );
}

export default App;
