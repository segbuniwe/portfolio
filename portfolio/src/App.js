import Nav from "./components/Nav";
import "./styles/mainpage.css";
import Main from "./components/Main";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
