import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function sumOfNaturalNums(n) {
  return ((n * (parseFloat(n) + 1)) / 2);
}

function App() {

  let [naturalNum, setNum] = React.useState(4);
  let naturalNumChanged = (e) => setNum(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <div id="task-id">
          <input type="number" value={naturalNum} onChange={naturalNumChanged} />
          <p>
            The sum of {naturalNum} natural numbers is {sumOfNaturalNums(naturalNum)}
          </p>
        </div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button color="primary">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
