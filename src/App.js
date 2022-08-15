import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<About></About>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
