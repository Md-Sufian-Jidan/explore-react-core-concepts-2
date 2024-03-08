// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './friends';

function App() {
  // const [count, setCount] = useState(0)

  function handleClick(){
    alert('button Click');
  }

  const handleClick2 = () => {
    alert('button 2 Clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third button clicked')}}>Third</button>
      {/* vejailla */}
      <button onClick={()=> addToFive(3)}>Four</button>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
