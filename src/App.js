import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Champagne from "./Champagne";
import Cheetos from "./Cheetos";
import Coke from "./Coke";
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cheetos" element={<Cheetos />} />
          <Route path="/champagne" element={<Champagne />} />
          <Route path="/coke" element={<Coke />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
