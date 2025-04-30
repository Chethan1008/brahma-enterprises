import React from 'react';

const mobileData = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: '₹1,39,900',
    image: '/Mobilepage/apple.jpg',
    specs: ['256GB Storage', 'A17 Pro Chip', 'Triple Camera'],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: '₹1,29,999',
    image: '/Mobilepage/samsung.avif',
    specs: ['12GB RAM', '512GB Storage', '200MP Camera'],
  },
  {
    id: 3,
    name: 'OnePlus 12',
    price: '₹64,999',
    image: '/Mobilepage/apple.jpg',
    specs: ['16GB RAM', 'Snapdragon 8 Gen 3', 'Fast Charging'],
  },
  {
    id: 4,
    name: 'Realme Narzo 60',
    price: '₹14,999',
    image: '/Mobilepage/apple.jpg',
    specs: ['6GB RAM', '64MP Camera', '90Hz AMOLED Display'],
  },
];

const MobilePage = () => (
  <div className="p-10">
    <h1 className="text-3xl font-bold text-blue-600 mb-4">Mobile Sales and Services</h1>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mobileData.map((mobile) => (
        <div
          key={mobile.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={mobile.image}
            alt={mobile.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{mobile.name}</h2>
            <p className="text-green-600 font-bold">{mobile.price}</p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              {mobile.specs.map((spec, index) => (
                <li key={index}>• {spec}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MobilePage;
