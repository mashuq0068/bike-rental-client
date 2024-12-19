import Aos from "aos";
import React, { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Bike data array
  const bikes = [
    {
      id: 1,
      name: "Mountain",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.iL_bok76nXuQ8gLh0He9rgHaE8&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      name: "Urban",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.5_0T8pMWwZkxx-jXMhgGyAHaDt&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      name: "Road",
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.QSfiUGqfgWLpMXuI_kTbpgAAAA&pid=Api&P=0&h=220",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-extrabold text-gray-900">CHOOSE YOUR BIKE</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
        </p>

        {/* Bike Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="relative group"
            >
              <img
                src={bike.imageUrl}
                alt={bike.name}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 bg-black/60 px-3 py-2 rounded-md text-white text-lg font-medium">
                {bike.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
