import Nav from "./components/Nav";
import "./styles/mainpage.css";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <section id="main">
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}

export default App;
