 import { Link } from "react-router-dom";

export default function GenericButton({ name, to }) {
  return (
    <Link to={to} className="nav-btn">
      {name}
    </Link>
  );
}
