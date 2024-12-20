import Aos from "aos";
import { useEffect } from "react";
import { FaDollarSign, FaMotorcycle, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaDollarSign className="text-4xl text-red-500" />,
      title: "Best Prices",
      description:
        "We offer the most competitive prices in the market for all our bikes.",
    },
    {
      id: 2,
      icon: <FaMotorcycle className="text-4xl text-red-500" />,
      title: "Wide Selection",
      description:
        "Choose from a wide range of top-quality bikes to suit your needs.",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-4xl text-red-500" />,
      title: "Excellent Service",
      description:
        "Our customer service team is here to help you 24/7 with any inquiries.",
    },
  ];
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 uppercase text-center mb-12 ">
          Why <span className="">Choose Us</span>
        </h2>
        <div className="grid gap-12 md:grid-cols-2 mb-8 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              key={benefit.id}
              className="flex flex-col items-center text-center p-8 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
