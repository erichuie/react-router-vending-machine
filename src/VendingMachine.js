import { Link } from "react-router-dom";

/**A Vending machine for choosing snacks
 *
 * Props: None
 *
 * State: None
 */

function VendingMachine() {
  return (
    <div>
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
    </div>
  );
}

export default VendingMachine;