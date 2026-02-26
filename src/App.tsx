import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy load non-critical sections
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const LoadingFallback = () => (
  <div className="h-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-inter selection:bg-accent/30">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
