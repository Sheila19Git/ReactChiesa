 import { Link } from "react-router-dom";

export default function GenericButton(props){

  const myStyles = {
    backgroundColor: props.color, 
    fontFamily: "monospace", 
    color: "black",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer"
  };

  return (
    <Link to={props.to} style={{ textDecoration: "none" }}>
      <button style={myStyles}>
        {props.name}
      </button>
    </Link>
  );
}
