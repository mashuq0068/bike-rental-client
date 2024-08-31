import React from 'react';

const FeaturedSection = () => {
  const bikes = [
    {
      id: 1,
      brand: 'Yamaha',
      image: 'https://tse2.mm.bing.net/th?id=OIP.lPGXan_cpLr_1ocj2N2kagHaE8&pid=Api&P=0&h=220',
    },
    {
      id: 2,
      brand: 'Honda',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Eo_HL5wVV4Njb7aagf31KAHaEK&pid=Api&P=0&h=220',
    },
    {
      id: 3,
      brand: 'Ducati',
      image: 'https://tse3.mm.bing.net/th?id=OIP.XRcgqNmoqjQ-leet0vxZ6AHaEo&pid=Api&P=0&h=220',
    },
    {
      id: 1,
      brand: 'Yamaha',
      image: 'https://tse2.mm.bing.net/th?id=OIP.lPGXan_cpLr_1ocj2N2kagHaE8&pid=Api&P=0&h=220',
    },
    {
      id: 2,
      brand: 'Honda',
      image: 'https://tse1.mm.bing.net/th?id=OIP.Eo_HL5wVV4Njb7aagf31KAHaEK&pid=Api&P=0&h=220',
    },
    {
      id: 3,
      brand: 'Ducati',
      image: 'https://tse3.mm.bing.net/th?id=OIP.XRcgqNmoqjQ-leet0vxZ6AHaEo&pid=Api&P=0&h=220',
    },
  ];

  return (
    <section className="">
      <div className=" mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Available <span className='text-red-500'>Bikes</span>
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={bike.image}
                alt={`${bike.brand} bike`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
                  {bike.brand}
                </h3>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                  View Detail
                </button>
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
