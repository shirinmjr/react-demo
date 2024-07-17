import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import AboutWebsite from "./components/AboutWebsite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <h1>Welcome to My Website</h1>

      <AboutMe />
      <Projects />
      <AboutWebsite />
    </>
  );
}

export default App;
