const PhotoPage = () => {
  // Photo data included directly in the component
  const photos = [
    {
      id: 1,
      title: "Portrait Session",
      description: "Professional portrait photography for individuals and families.",
      imageUrl: "/images/portrait.jpg",
      category: "portrait"
    },
    {
      id: 2,
      title: "Wedding Photography",
      description: "Capture your special day with our expert wedding photographers.",
      imageUrl: "/images/wedding.jpg",
      category: "event"
    },
    {
      id: 3,
      title: "Product Photography",
      description: "High-quality product images for your e-commerce business.",
      imageUrl: "/images/product.jpg",
      category: "commercial"
    },
    {
      id: 4,
      title: "Outdoor Shoot",
      description: "Beautiful outdoor photography in natural lighting.",
      imageUrl: "/images/outdoor.jpg",
      category: "portrait"
    },
    {
      id: 5,
      title: "Newborn Photography",
      description: "Gentle and safe photography for your precious newborns.",
      imageUrl: "/images/newborn.jpg",
      category: "portrait"
    },
    {
      id: 6,
      title: "Corporate Headshots",
      description: "Professional business portraits for your team.",
      imageUrl: "/images/headshot.jpg",
      category: "commercial"
    }
  ];

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Photo Studio Services</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Capture your best moments with our professional photography and printing services.
            Browse our portfolio and book your session today.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={photo.imageUrl} 
                alt={photo.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{photo.title}</h3>
                <p className="text-gray-600 mb-4">{photo.description}</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Services Info */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Photography Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Portrait Photography</h3>
              <p className="text-gray-600">Professional portraits for individuals, families, and professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Event Coverage</h3>
              <p className="text-gray-600">Weddings, corporate events, and special occasions captured beautifully.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Commercial Work</h3>
              <p className="text-gray-600">Product photography, real estate, and business branding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;