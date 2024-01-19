import {Link} from "react-router-dom";

/**Renders page for Champagne details
 *
 * Props: None
 *
 * State: None
*/

function Champagne(){
  return(
    <div>
      <p>This is Champagne</p>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Champagne;