 export default function GenericButton(props){

    const myStyles = {
        backgroundColor:props.color, 
        fontFamily:"monospace", 
        color:"black",
    };

    return (
    <>
    <button style={myStyles}>{props.name}</button>
    </>
    );
 }