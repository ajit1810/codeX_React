import { useState } from "react";
import Profile from "./Profile";
import './Welcome.css';

function Welcome() {
    const [name,setName] = useState("ajit");
    const [count,setCount] = useState(0);
  
    let handleChange=()=>{
      console.log("button pressed");
      setName("Dom manupulated in React.js");
      setCount(count + 1);
      console.log(name);
    }
    return (
        <div className="Welcome">
            <h1>{name}</h1>
            <h2>{count}</h2>
            <Profile name={name} count={count}/>
            <button onClick={handleChange}>change</button>
        </div>
    );
}

export default Welcome;