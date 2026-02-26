export default function Footer() {
  const currentYear = new Date().getFullYear();

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} SAJID. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              onClick={backToTop}
              className="text-gray-500 hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              <i className="fas fa-arrow-up"></i> Back to Top
            </a>
            <a className="text-gray-500 hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a className="text-gray-500 hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
