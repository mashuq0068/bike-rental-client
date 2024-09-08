import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(true);
    }, 500); // Delay to start the animation after 500ms
  }, []);
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage:
          "url('https://lovelace-media.imgix.net/getty/180363310.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative flex flex-col items-center justify-center  h-full z-10 px-4">
        <h1 className="text-4xl transition-all duration-1000 ease-in-out md:text-6xl lg:text-7xl font-bold mb-6 text-center">
          Your <span className="text-red-500">Next</span> Adventure Awaits
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl max-w-2xl text-center mb-8">
          Find the perfect bike for your journey. Rent now and hit the road!
        </p>
        <div className="flex  items-center justify-center flex-col md:gap-0 gap-3  md:flex-row md:w-[70%] w-[90%]  lg:w-[30%]  space-y-4 sm:space-y-0 sm:space-x-3 mb-8">
          <input
            type="text"
            placeholder="Search bike availability..."
            className={`transition-all duration-1000 ease-in-out ${
              isExpanded ? "w-full" : "w-0"
            } py-3 px-8 rounded-full bg-white text-black focus:outline-none`}
            style={{ minWidth: isExpanded ? "100%" : "0%" }}
          />
          <button className="bg-red-500  hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
            Search
          </button>
        </div>
        <button onClick={() => navigate('/contact-us')} className="bg-blue-500 flex gap-2 items-center hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-full transition-all duration-300 text-lg">
          <IoIosCall />
          Call Us For Booking
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
