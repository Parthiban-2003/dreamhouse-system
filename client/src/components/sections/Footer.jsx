import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(() => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">DreamHouse</h2>
          <p className="text-gray-400">
            Building smarter construction solutions for engineers and customers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">support@dreamhouse.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} DreamHouse. All rights reserved.
      </div>
    </footer>
  );
});

export default Footer;