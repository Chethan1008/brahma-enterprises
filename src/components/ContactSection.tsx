
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
    toast.success("Initiating phone call...");
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
    toast.success("Opening email client...");
  };

  const handleLocationClick = () => {
    // Replace with actual coordinates
    window.open("https://maps.google.com/?q=your-business-location", "_blank");
    toast.success("Opening location in maps...");
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for inquiries, service requests, or to visit our location
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="bg-blue-800 rounded-lg p-8 text-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            onClick={() => handlePhoneClick('+919876543210')}
          >
            <Phone className="h-10 w-10 mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-blue-100">+91 8722336654</p>
            
          </div>
          
          <div 
            className="bg-blue-800 rounded-lg p-8 text-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            onClick={() => handleEmailClick('contact@brahmaenterprises.com')}
          >
            <Mail className="h-10 w-10 mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-blue-100">brahmaenterprises021@gmail.com</p>
            
          </div>
          
          <div 
            className="bg-blue-800 rounded-lg p-8 text-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            onClick={handleLocationClick}
          >
            <MapPin className="h-10 w-10 mx-auto mb-4 text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-blue-100">Near SBI Bank </p>
            <p className="text-blue-100">Harugeri, Karnatka, 591220</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-100">Business Hours: Monday - Saturday, 9:00 AM - 7:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
