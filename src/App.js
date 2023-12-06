import React from 'react';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
// import { useState } from 'react';

// import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Route} from 'react-router-dom';
// import { BrowserRouter as Switch} from 'react-router-dom';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  // const [count, setCount] = useState(0);

  // // let count = 0;
  // const increment = () => {
  //   // count++;
  //   setCount(count + 1);
  // }

  // const decrement = () => { 
  //   // count--;
  //   setCount(count - 1);
  // }

  return (
    <div>
      <h1>React bootstrap</h1>
      <div className="acordin">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      
      {/* <span className='title'>My Counter</span>
      <p className='subTitle'>The Count is {count}</p>
      <button onClick={increment} className='button'>+</button>
      <button onClick={decrement} className='button'>-</button> */}

      {/* <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button> */}

      {/* use state ekk use krl asign krn value ekk  percistant, constant value ekk nemei */}
    </div>
    
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/contact" component={Contact} />
    //   </Switch>
    // </Router>
  );
}

export default App;
