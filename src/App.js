import './App.css';
import Key from './Key';
import { useState } from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ['+', '-', '*', '.', '=', '/'];

function App() {
  const [operation, setOperation] = useState('');

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='row'>
          <div className='screen'> {operation === '' ? 0 : operation} </div>
        </div>
        <div className='row'>
          <Key character={numbers[0]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[1]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[2]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={symbols[0]} classes={'key symbol'} operation={operation} setOperation={setOperation} />
        </div>
        <div className='row'>
          <Key character={numbers[3]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[4]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[5]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={symbols[1]} classes={'key symbol'} operation={operation} setOperation={setOperation} />
        </div>
        <div className='row'>
          <Key character={numbers[6]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[7]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[8]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={symbols[2]} classes={'key symbol'} operation={operation} setOperation={setOperation} />
        </div>
        <div className='row'>
          <Key character={symbols[3]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={numbers[9]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={symbols[4]} classes={'key number'} operation={operation} setOperation={setOperation} />
          <Key character={symbols[5]} classes={'key symbol'} operation={operation} setOperation={setOperation} />
        </div>
        <div className='row'>
          <Key character={'Clear'} classes={'clear'} operation={operation} setOperation={setOperation} />
        </div>
      </div>
    </div>
  );
}

export default App;
