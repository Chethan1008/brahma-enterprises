
import { Fuel, Smartphone, Tv, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const services = [
  {
    id: "gas",
    title: "Gas Point Commercial Gas Agency",
    description: "Reliable commercial gas supply for businesses and households. We provide prompt delivery and excellent customer service.",
    icon: Fuel,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
    image: "/images/gas-service.jpg"
  },
  {
    id: "mobile",
    title: "Mobile Sales & Services",
    description: "Wide range of smartphones and accessories with expert repair services. Get the latest devices at competitive prices.",
    icon: Smartphone,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    image: "/images/mobile-service.jpg"
  },
  {
    id: "tv",
    title: "LED TV Sales",
    description: "Premium quality LED TVs from top brands. Enjoy cutting-edge technology and crystal-clear displays for your entertainment.",
    icon: Tv,
    color: "text-green-500",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
    image: "/images/LEDTV.jpg"
  },
  {
    id: "photo",
    title: "Photo Studio",
    description: "Professional photography services for all occasions. Capture your precious moments with our skilled photographers.",
    icon: Camera,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    image: "/images/Photo.jpg"
  }
];

const ServiceSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success(`Viewing ${serviceId} service details`);
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of business offerings designed to meet all your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id} 
              className="scroll-mt-20"
              onClick={() => handleServiceClick(service.id)}
            >
              <Card className={`overflow-hidden border-2 ${service.borderColor} hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}>
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className={`p-4 rounded-full ${service.bgColor} mr-4`}>
                        <service.icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
