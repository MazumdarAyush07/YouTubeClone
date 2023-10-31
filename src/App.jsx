import { useState } from "react";
import "./App.css";
import { AppContext } from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <div className="text-2xl">This area will render elements</div>
    </AppContext>
  );
}

export default App;
