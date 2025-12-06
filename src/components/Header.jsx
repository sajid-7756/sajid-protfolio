import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          onClick={() => scrollToSection('header')}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-accent">SA</span>
          <span className="text-gray-300">JID</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(`#${link}`)}
              className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium cursor-pointer"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-accent focus:outline-none"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(`#${link}`)}
                className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium py-2"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
