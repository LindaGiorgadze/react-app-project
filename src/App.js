import './App.css';
// import { useState } from 'react';
// import Counter from './components/Counter';
// import Form from './components/Form';
// import Header from './components/Header';
import TodoApp from './components/TodoApp';

export default function App() {
  // const [inputValue, setInputValue] = useState(0);
  // const [startValue, setStartValue] = useState();
  

  return (
    <div className="App">
      <TodoApp />
      {/* <Header />
      <Form /> */}
      {/* <input 
        type='number' 
        placeholder='Type Number' 
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={()=> setStartValue(parseInt(inputValue))} >
        Change start value
      </button>
      { startValue && <Counter start={startValue} increase={1} /> } */}
      
      {/* <Counter  increase={5} />
      <Counter start={300}  /> */}
    </div>
  );
}

