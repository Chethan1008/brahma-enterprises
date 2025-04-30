const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brahma Enterprises</h3>
            <p className="text-gray-400">Your one-stop solution for multiple services including gas supply, mobile sales, LED TVs, photo studio services, and SBI customer service.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#gas" className="text-gray-400 hover:text-white transition-colors">Gas Point</a></li>
              <li><a href="#mobile" className="text-gray-400 hover:text-white transition-colors">Mobile Sales</a></li>
              <li><a href="#tv" className="text-gray-400 hover:text-white transition-colors">LED TV</a></li>
              <li><a href="#photo" className="text-gray-400 hover:text-white transition-colors">Photo Studio</a></li>
              <li><a href="#sbi" className="text-gray-400 hover:text-white transition-colors">SBI Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">
              Near SBI Bank<br />
              Harugeri, Karntaka, 591220<br />
              Phone: +91 8722336654<br />
              brahmaenterprises021@gmail.com
            </address>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brahma Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
