import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import TaskManager from "./components/TaskManager";
import TypingTest from "./components/TypingTest";
import Calculator from "./components/Calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TaskManager" element={<TaskManager />} />
        <Route path="/TypingTest" element={<TypingTest />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
