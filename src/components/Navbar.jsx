const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 font-comfortaa">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <a href="/" className="text-gray-900 font-medium">
          Daniel Visser
        </a>

        <div className="space-x-10 text-sm">
          <a href="#about" className="hover:font-underline">
            About
          </a>
          <a href="#projects" className="hover:font-underline">
            Projects
          </a>
          <a href="#contact" className="hover:font-underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
