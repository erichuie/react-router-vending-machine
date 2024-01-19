import { Link } from "react-router-dom";

/** NavBar
 *
 * Props: None
 *
 * State: None
 */

function NavBar() {
  return (
    <div>

      <Link to='/cheetos'>
        Cheetos
      </Link>
      <span>           </span>
      <Link to='/champagne'>
        Champagne
      </Link>
      <span>           </span>
      <Link to='/coke'>
        Coke
      </Link>
    </div>
  );
}

export default NavBar;