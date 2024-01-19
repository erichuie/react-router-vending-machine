import {Link} from "react-router-dom";

/**Renders page for Coke details
 *
 * Props: None
 *
 * State: None
*/

function Coke(){
  return(
    <div>
      <p>This is Coke</p>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Coke;