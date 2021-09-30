import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action/action';

function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Increment and decrement</h1>
      <h1>{counter}</h1>
      <button style={{ padding: "10px 50px", }} onClick={() => dispatch(increment)}>+</button>
      <button style={{ padding: "10px 50px" }} onClick={() => dispatch(decrement)}>-</button>
    </div>
  );
}

export default App;
