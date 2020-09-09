import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The React ToDo App</h1>
      </header>
      <main className="App-main">
          <section className="col"><h2>Organization</h2>
          <ul>
            <li>Primary</li>
            <li></li>
          </ul>
          </section>
          <section className="col"><h2>Tasks</h2></section>
          <section className="col"><h2>Add New Task</h2></section>
      </main>
      <footer className="App-footer">
        <p>Todays Date is: <span className="displayDate"></span></p>
      </footer>
    </div>
  );
}

export default App;
