import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import AboutWebsite from "./components/AboutWebsite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar />

      <h1 className="py-20">Welcome to My Website</h1>
      <AboutMe />
      <Resume />
      <Projects />

      <AboutWebsite />
    </div>
  );
}

export default App;
