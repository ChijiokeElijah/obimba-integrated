import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Obimba Integrated Services
            </h4>
            <p className="text-sm">
              Delivering excellence in construction and design since 2010.
              Building strength, quality, and legacy in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                <Link to="about" smooth={true} duration={500}>
                  About Us
                </Link>{" "}
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                <Link to="contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-sm mb-4">
              001Ugwuorji Road Amaekpu
              <br />
              Ohafia, Abia State Nigeria
              <br />
              +234 706 199 1053
              <br />
              info@obimba.com
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Facebook icon path */}
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter icon path */}
                  <path d="M23 3a10.9 10.9 0 0 1-3.1.9A5.4 5.4 0 0 0 22.4 1a10.8 10.8 0 0 1-3.4 1.3A5.3 5.3 0 0 0 16.2 0c-2.9 0-5.2 2.4-5.2 5.3 0 .4 0 .8.1 1.2A15 15 0 0 1 1.7 1.1a5.3 5.3 0 0 0-1.4 2.7 5.3 5.3 0 0 0 2.3 4.4A5.2 5.2 0 0 1 .9 7v.1c0 2.5 1.7 4.6 4 5.1a5.3 5.3 0 0 1-2.4.1c.7 2.3 2.7 4 5.1 4A10.6 10.6 0 0 1 0 19.6a15 15 0 0 0 8.3 2.4c10 0 15.5-8.3 15.5-15.5v-.7A11 11 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* LinkedIn icon path */}
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 0H5a2.5 2.5 0 0 1-.02 0zM3 8.5h4v12H3v-12zm7 0h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.1h-4v-5.4c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.5h-4v-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Obimba Integrated Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
