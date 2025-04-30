import { useState, useEffect, useRef } from "react";
import { MoreVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <a href="#" className="flex-shrink-0 flex items-center">
          <img 
  src="logo.png"  // Replace with your actual logo image path
  alt="Brahma Enterprises Logo" 
  style={{ height: '64px', width: '164px' }}  // Adjust custom height and width in pixels
/>

          </a>

          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">Home</a>
            <a href="#gas" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">Gas Point</a>
            <a href="#mobile" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">Mobile Sales</a>
            <a href="#tv" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">LED TV</a>
            <a href="#photo" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">Photo Studio</a>
            <a href="#sbi" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">SBI Service</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile - 3 Dots */}
          <div className="md:hidden flex items-center relative" ref={menuRef}>
            <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <MoreVertical className="h-6 w-6" />}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-10 right-0 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ease-in-out">
                <a href="#home" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">Home</a>
                <a href="#gas" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">Gas Point</a>
                <a href="#mobile" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">Mobile Sales</a>
                <a href="#tv" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">LED TV</a>
                <a href="#photo" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">Photo Studio</a>
                <a href="#sbi" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">SBI Service</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">Contact</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
