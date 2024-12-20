import Aos from 'aos';
import { useEffect } from 'react';

const HowItWorks = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Steps Data Array
  const steps = [
    {
      id: 1,
      title: "Choose Your Bike",
      description: "Browse our collection and choose the perfect bike for your needs.",
      icon: "https://img.icons8.com/ios/50/000000/bicycle.png", // Example icon
    },
    {
      id: 2,
      title: "Book Online",
      description: "Reserve your bike with ease through our online booking system.",
      icon: "https://img.icons8.com/ios/50/000000/online-store.png", // Example icon
    },
    {
      id: 3,
      title: "Enjoy Your Ride",
      description: "Pick up your bike from the rental location and hit the road!",
      icon: "https://img.icons8.com/ios/50/000000/bicycle.png", // Example icon
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-4xl uppercase font-bold text-gray-900 mb-8">
          How It <span >Works</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Renting a bike has never been easier! Follow these simple steps to get started.
        </p>

        {/* Steps Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 mx-auto text-red-500"
                />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
