import React from 'react';

/**
 
Custom equality check of props
By default React.memo() does a shallow comparison of props and objects of props.

To customize the props comparison you can use the second argument to indicate an equality check function:

React.memo(Component, [areEqual(prevProps, nextProps)]);
areEqual(prevProps, nextProps) function must return true if prevProps and nextProps are equal.
 */

function areEqual(prevProps, nextProps) {
  if (prevProps.id !== nextProps.id) {
    console.log("areEqual (prevProps, nextProps):",prevProps, nextProps);
    return false
  }
  return true;
}

function Child({ id }) {
  console.log("Child:",id);

  return (
    <div>
      <h2>Child ID</h2>
      <div>{id}</div>
    </div>
  );
}

export default React.memo(Child, areEqual);