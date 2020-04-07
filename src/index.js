import React from "react";
import ReactDOM from "react-dom";
import Filter from './Filter'

function App() {
  return (
    <div>
      <Filter />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
