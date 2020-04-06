import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <div>Hello!</div>
      <Food fav="1" />
    </div>
  );
}

export default App;
