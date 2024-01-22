import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Champagne from "./Champagne";
import Cheetos from "./Cheetos";
import Coke from "./Coke";

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/cheetos'>
          Cheetos
        </Link>
        <br></br>
        <Link to='/champagne'>
          Champagne
        </Link>
        <br></br>
        <Link to='/coke'>
          Coke
        </Link>
        <Routes>
          <Route path="/cheetos" element={<Cheetos />} />
          <Route path="/champagne" element={<Champagne />} />
          <Route path="/coke" element={<Coke />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;