// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <p id='hello'>안녕 리액트!</p>
// );
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const item = '맥북';
function handleClick(){
  alert('곧 도착합니다!');
}

root.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <button onClick={handleClick}>확인</button>
  </>
);