import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<About></About>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
