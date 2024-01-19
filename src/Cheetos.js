import {Link} from "react-router-dom";

/**Renders page for Cheetos details
 *
 * Props: None
 *
 * State: None
 */

function Cheetos(){
  return(
    <div>
      <p>This is Cheetos</p>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Cheetos;