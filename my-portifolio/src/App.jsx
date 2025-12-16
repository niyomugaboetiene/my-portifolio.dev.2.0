import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Layout from "./pages/layout";

function App() {
  return (
    <Layout>
      <div className="flex flex-col scroll-smooth">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
          <About />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <Contact />
        </section>
      </div>
    </Layout>
  );
}

export default App;
