
import "./details.css";
function Details(props) {
    return (
        <div className = "details-box" style = {{backgroundColor:props.backgroundColor ,color:props.color}}>
            <h1>
                {props.name}
            </h1>
        </div>
    );
}

export default Details;