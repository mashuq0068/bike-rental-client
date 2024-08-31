import React, { useState } from 'react';
import { FaTag, FaInfoCircle } from 'react-icons/fa';

const promotions = [
  {
    id: 1,
    code: 'SUMTO45',
    discount: '42% OFF',
    description: 'Get 42% off on all bike rentals this summer!',
  },
  {
    id: 2,
    code: 'JACK4005',
    discount: 'First Ride Free',
    description: 'Enjoy your first ride on us. Use code at checkout!',
  },
  {
    id: 3,
    code: 'LOCALBOY',
    discount: '15% OFF',
    description: 'Save 15% on weekend rentals. Valid for all bikes.',
  },
];


const CouponsAndDiscounts = () => {
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <section className="py-16 bg-white  text-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-700">
        Coupons & <span className="text-red-500">Discounts</span>
        </h2>

        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {promotions.map((promo) => (
            <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
              key={promo.id}
              className="w-full md:w-1/2 lg:w-1/3  p-6 rounded-lg shadow-xl flex flex-col justify-between hover:bg-red-500 hover:text-white duration-700 transition-all "
            >
              <div>
                <FaTag className={`${isHover ? "text-white" : "text-red-500" } text-5xl mb-4`} />
                <h3 className="text-3xl font-bold mb-2">{promo.discount}</h3>
                <p className=" mb-6">{promo.description}</p>
              </div>
              <div className="mt-4">
                <div className={`${isHover ? "bg-white text-red-500" : "bg-red-500 text-white"} font-bold py-2 px-4 rounded-full text-center`}>
                  Code: <span className="tracking-wider">{promo.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16  p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-red-500" />
            How to Apply Coupons
          </h3>
          <p className="text-gray-700 leading-relaxed">
            1. Select your desired bike and proceed to the checkout page.<br />
            2. Enter the coupon code in the "Promo Code" field.<br />
            3. Click "Apply" to see your discounted total.<br />
            4. Complete your booking to enjoy your savings!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouponsAndDiscounts;
