import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'; 
import './App.css'

ReactDOM.render(<Counter />, document.getElementById('root'));


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
