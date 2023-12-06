import React from 'react';
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Route} from 'react-router-dom';
// import { BrowserRouter as Switch} from 'react-router-dom';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  // let [count, setCount] = React.useState(0);
  let count = 0;
  return (
    <>
      <span className='title'>My Counter</span>
      <p className='subTitle'>The Count is {count}</p>
      <button className='button'>+</button>
      <button className='button'>-</button>
      {/* <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button> */}
    </>
    
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
