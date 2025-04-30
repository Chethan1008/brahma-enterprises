import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Fuel, Smartphone, Tv, Camera } from "lucide-react";

const FeaturedServiceSections = () => {
  const navigate = useNavigate();

  return (
    <>{/* Gas Point Section */}
    <section id="gas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
    
          {/* Left Content */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="bg-orange-100 inline-flex p-4 rounded-full mb-4">
              <Fuel className="h-10 w-10 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gas Point Commercial Gas Agency</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide reliable commercial gas supply services for businesses and households...
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-orange-500">✓</span> Safe and secure gas supply
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-orange-500">✓</span> Prompt delivery services
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-orange-500">✓</span> Commercial and residential solutions
              </li>
            </ul>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => navigate("/services/gas")}>
              Learn More
            </Button>
          </div>
    
          {/* Right Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl bg-white h-80">
              <img
                src="/images/gas-service.jpg"  // 🔁 Replace with your actual image path
                alt="Commercial Gas Supply"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
    
        </div>
      </div>
    </section>
    
    {/* Mobile Sales Section */}
    <section id="mobile" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center">
    
          {/* Left Content */}
          <div className="md:w-1/2 md:pl-12 mb-10 md:mb-0">
            <div className="bg-blue-100 inline-flex p-4 rounded-full mb-4">
              <Smartphone className="h-10 w-10 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mobile Sales and Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover the latest smartphones and accessories at competitive prices...
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-blue-500">✓</span> Latest smartphone models
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-blue-500">✓</span> Expert repair services
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-blue-500">✓</span> Wide range of accessories
              </li>
            </ul>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => navigate("/services/mobile")}>
              View Collection
            </Button>
          </div>
    
          {/* Right Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl bg-white h-80">
              <img
                src="/images/mobile-service.jpg"  // 🔁 Replace with your actual image path
                alt="Mobile Phones and Accessories"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
    
        </div>
      </div>
    </section>
    

      {/* LED TV Section */}
<section id="tv" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center">
      
      {/* Left Content */}
      <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
        <div className="bg-green-100 inline-flex p-4 rounded-full mb-4">
          <Tv className="h-10 w-10 text-green-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">LED TV Sales</h2>
        <p className="text-lg text-gray-600 mb-6">
          Elevate your entertainment experience with our premium quality LED TVs...
        </p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✓</span> Top brand LED televisions
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✓</span> Smart TV capabilities
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✓</span> Installation and setup services
          </li>
        </ul>
        <Button className="bg-green-500 hover:bg-green-600" onClick={() => navigate("/services/tv")}>
          Browse TVs
        </Button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-xl bg-white h-80">
          <img
            src="/images/LEDTV.jpg"  // 🔁 Replace with your actual path
            alt="Premium LED TV Collection"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Photo Studio Section */}
     {/* Photo Studio Section */}
<section id="photo" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row-reverse items-center">
      
      {/* Left Content */}
      <div className="md:w-1/2 md:pl-12 mb-10 md:mb-0">
        <div className="bg-purple-100 inline-flex p-4 rounded-full mb-4">
          <Camera className="h-10 w-10 text-purple-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Photo Studio Services</h2>
        <p className="text-lg text-gray-600 mb-6">
          Capture your precious moments with our professional photography services...
        </p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-purple-500">✓</span> Professional portrait photography
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-purple-500">✓</span> Event coverage services
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-purple-500">✓</span> Photo printing and framing
          </li>
        </ul>
        <Button className="bg-purple-500 hover:bg-purple-600" onClick={() => navigate("/services/photo")}>
          Book a Session
        </Button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-xl bg-white h-80">
          <img
            src="/images/Photo.jpg"  // 🔁 Replace with your actual path
            alt="Photo studio showcasing camera and backdrop setup"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* SBI Services Section */}
<section id="sbi" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center">
      
      {/* Left Content */}
      <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
        <div className="bg-indigo-100 inline-flex p-4 rounded-full mb-4">
          <svg className="h-10 w-10 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.476 2 2 6.478 2 12s4.476 10 10 10 10-4.478 10-10S17.524 2 12 2zm0 18.1c-4.471 0-8.1-3.63-8.1-8.1S7.529 3.9 12 3.9 20.1 7.53 20.1 12 16.471 20.1 12 20.1zm-.75-6.35v-5.4h1.5v5.4h-1.5z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SBI Banking Services</h2>
        <p className="text-lg text-gray-600 mb-6">
          Open a new SBI account or get a student-friendly bank account with easy access and benefits.
        </p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✓</span> New SBI Account Opening
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✓</span> Student Bank Account Assistance
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✓</span> Guidance on Internet Banking & UPI Setup
          </li>
        </ul>
        <Button className="bg-indigo-500 hover:bg-indigo-600" onClick={() => navigate("/services/sbi")}>
          Apply Now
        </Button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-xl bg-white h-80 flex items-center justify-center">
          <img
            src="/images/SBI.jpeg" // 👉 Replace with your actual image path
            alt="SBI account assistance"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default FeaturedServiceSections;
