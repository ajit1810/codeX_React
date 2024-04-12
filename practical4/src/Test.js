import './test.css'


function Test(props) {
    return(
        <div className="test">
            <h1>{props.name} {props.count}</h1>
        </div>
    );
}

export default Test;