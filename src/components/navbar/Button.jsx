import { Link } from "react-router-dom";

function Button({ path, name }) {
  return (
    <Link className="hover:text-lime-500" to={path}>
      {name}
    </Link>
  );
}

export default Button;
