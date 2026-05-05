import { useState, useEffect } from "react";

import Education from "./layouts/Education";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import TechSkills from "./layouts/TechSkills";
// import Achievements from "./layouts/Achievements";
import Projects from "./layouts/Projects";
import Footer from "./layouts/Footer";
import ConnectMe from "./layouts/ConnectMe";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Passed theme prop to Hero */}
      <Hero theme={theme} />

      <div
        className="bg-gradient-to-b 
        from-[var(--color-baseColor)] 
        via-[var(--color-primary)]/30
        to-[var(--color-baseColor)] 
        overflow-hidden"
      >
        <Education theme={theme}/>
        <Projects theme={theme}/>
        {/* <Achievements /> */}
        <TechSkills />
        <ConnectMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;