import Board from "./Board";
import { useState } from "react";
import Button from "./Button";
import './App.css';

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    const [myHistory, setmyHistory] = useState([]);
    const [otherHistory, setotherHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum_1 = random(6);
        const nextNum_2 = random(6);
        setmyHistory([...myHistory, nextNum_1]);
        setotherHistory([...otherHistory, nextNum_2]);
    };

    const handleClearClick = () =>{
        setmyHistory([]);
        setotherHistory([]);
    };
    return(
        <div className="App">
            <div>
                <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
                <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory}/>
                <Board name="상대" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    );
}

export default App;