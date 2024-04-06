// import logo from './logo.svg';
// import './App.css';

import  {CorusesCard, Testcard } from "./card";
import './card.css'
function App() {
  return (
    <div className="App">
      <h1>Coruses</h1>
        <div className="box1">
            <CorusesCard name="Java" img="" backgroundColor="orange" color="green"/>
            <CorusesCard name="Dart" backgroundColor="gray" color="orange"/>
            <CorusesCard name="Python" backgroundColor="green" color="orange"/>
        </div>
      <h1>test</h1>
      <div className="box1">
            <Testcard backgroundColor="yellow"/>
            <Testcard backgroundColor="pink"/>
            <Testcard backgroundColor="black"/>
        </div>
    </div>
  );
}

export default App;
