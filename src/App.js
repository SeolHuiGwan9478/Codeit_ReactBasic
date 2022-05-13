import Board from "./Board";
import { useState } from "react";
import Button from "./Button";

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    const [num_1, setNum_1] = useState(1);
    const [num_2, setNum_2] = useState(1);
    const [sum_1, setSum_1] = useState(0);
    const [sum_2, setSum_2] = useState(0);
    const [gameHistory_1, setGameHistory_1] = useState([]);
    const [gameHistory_2, setGameHistory_2] = useState([]);

    const handleRollClick = () => {
        const nextNum_1 = random(6);
        const nextNum_2 = random(6);
        setNum_1(nextNum_1);
        setNum_2(nextNum_2);
        setSum_1(sum_1 + nextNum_1);
        setSum_2(sum_2 + nextNum_2);
        setGameHistory_1([...gameHistory_1, nextNum_1]);
        setGameHistory_2([...gameHistory_2, nextNum_2]);
    };

    const handleClearClick = () =>{
        setNum_1(1);
        setNum_2(1);
        setSum_1(0);
        setSum_2(0);
        setGameHistory_1([]);
        setGameHistory_2([]);
    };
    return(
        <>
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
            <Board name="나" color="blue" num={num_1} sum={sum_1} gameHistory={gameHistory_1}/>
            <Board name="상대" color="red" num={num_2} sum={sum_2} gameHistory={gameHistory_2}/>
        </>
    );
}

export default App;