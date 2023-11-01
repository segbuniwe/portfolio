import Nav from "./components/Nav";
import "./styles/mainpage.css";
import Main from "./components/Main";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route exact path="/portfolio" element={<Main />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
