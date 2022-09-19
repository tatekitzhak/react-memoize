import React, { useState }from 'react';
import { v4 as uuidv4 } from 'uuid';
import Child from '@/components/Child';
/**
 
Custom equality check of props
By default React.memo() does a shallow comparison of props and objects of props.

To customize the props comparison you can use the second argument to indicate an equality check function:

React.memo(Component, [areEqual(prevProps, nextProps)]);
areEqual(prevProps, nextProps) function must return true if prevProps and nextProps are equal.
 */

function App() {
  const [id, setId] = useState(uuidv4);

  console.log("App:");

  function onClick() {
    setId(uuidv4);
  }

  return (
    <div className="App">
      <h1>fc React.memo Child</h1>

      <button onClick={onClick}>change id</button>
      <Child id={id} />
    </div>
  );
}

export default App;