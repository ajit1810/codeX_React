import './card.css';

export function CorusesCard(props) {
    return(
        <div className="courses-card" style = {{backgroundColor:props.backgroundColor ,color:props.color}}>
             <h1> {props.name} </h1>
        </div>
    );
}

export function Testcard(props) {
    return(
        <div className="test-card" style={{backgroundColor:props.backgroundColor}}>
            {props.name}
        </div>
    );
}