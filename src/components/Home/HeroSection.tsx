import  { useEffect } from 'react';
import Aos from "aos"

const HeroSection = () => {
  useEffect(()=>{
Aos.init()
  },[])
  return (
    <div className="container flex justify-center items-center bg-white">
   

    {/* Hero Section */}
    <section className="grid md:grid-cols-2 items-center p-8">
      {/* Left Column */}
      <div   data-aos="fade-right"  data-aos-duration="1500" className=' lg:max-w-[500px]'>
        <h1 className="text-4xl font-bold  text-gray-900">
          Find a High Quality Bike and Rent Now
        </h1>
        <p className="text-gray-600 leading-snug mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam
          morbi et malesuada tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam
          morbi et malesuada tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam
          morbi et malesuada tempor.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Explore Bike</button>
          <button className="border-2 border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white">
            About Us
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div   data-aos="fade-left"  data-aos-duration="1500" className="relative">
        <img
          src="https://purepng.com/public/uploads/medium/purepng.com-bicyclebicyclesbicyclebikecyclehuman-poweredpedal-drivensingle-track-vehicletwo-wheels-1701528100067gjmm4.png"
          alt="Bike"
          className="w-full object-cover"
        />
        <div className="absolute top-12 right-12 bg-white shadow-lg p-4 rounded">
          <h3 className="text-gray-900 font-bold">Popular Bikes</h3>
          <p className="text-gray-600">Road Bike - 252</p>
          <p className="text-red-500 font-bold">$20/Day</p>
        </div>
      </div>
    </section>
  </div>
  );
};

export default HeroSection;
