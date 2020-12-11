import { useState } from 'react';
import Board from './Board';
import './App.css';


window.choice = 0;
const colors = [
  '#534B62',
  '#74A4BC',
  '#FED766',
  '#9C89B8',
  '#66666E',
  '#415D43',
  '#758173',
];

function App() {
  colors.sort(function() {return 0.5 - Math.random()})
  const background = colors[0];
  const [size, setSize] = useState(3);
  const onSizeChange = evt => setSize(Number(evt.target.value));
  return (
    <div className="App" style={{backgroundColor: background}}>
      <input className="Size" type="range" min={3} value={size} max={8} step={1} onChange={onSizeChange}></input>
      <Board size={size} />
    </div>
  );
}

export default App;
