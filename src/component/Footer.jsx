import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 text-center md:text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Annapurna Restaurant</h3>
          <p className="text-gray-400">
            Owner: <span className="text-amber-400">Tirth Tank</span>
          </p>
          <p className="text-gray-400">
            Designed & Developed by:
            <span className="text-amber-400">Darshan Tank</span>
          </p>
          <p className="text-gray-400">
            Contact: <span className="text-amber-400">+91 12345 67890</span>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">
            Address:{" "}
            <span className="text-amber-400">123 Food Street, Ahmedabad</span>
          </p>
          <p className="text-gray-400">
            Phone: <span className="text-amber-400">+91 98765 43210</span>
          </p>
          <p className="text-gray-400">
            Email: <span className="text-amber-400">contact@annapurna.com</span>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-center gap-6 text-xl">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Annapurna Restaurant. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
