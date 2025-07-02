// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Our Projects", to: "projects" },
    { name: "Contact Us", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold text-blue-600">
            <img src={logo} alt="logo" className="h-10 w-10" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 font-bold">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-blue-600"
                spy={true}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-950 px-4 pb-4 space-y-6 font-bold">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-blue-600"
                spy={true}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer hover:text-blue-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
