import { useState } from 'react';
import Dice from './Dice';
import Button from './Button';

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]); 
    };
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button>처음부터</Button>
            </div>
            <Dice color="red" num={num}/>
            <div>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default App;