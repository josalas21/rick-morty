import { Link } from "react-router-dom";

function Button({ path, name }) {
  return (
    <Link class="hover:text-amber-500" to={path}>
      {name}
    </Link>
  );
}

export default Button;
