import React from "react";
import AppContainer from "./containers/App";
// import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        redux-counter
      </header>
      <section className="App-body">
        <AppContainer />
      </section>
    </div>
  );
};

export default App;
