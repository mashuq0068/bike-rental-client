
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useAppSelector } from '../../redux/hooks';

const ContactUs = () => {
  const user = useAppSelector((state) => state.auth)
  console.log("new user data => " , user);
  return (
    <section className="pb-16 pt-4 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-700">
          <span className="text-red-500">Contact</span> Us
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:outline-red-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full focus:outline-red-500 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 "
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:outline-red-500"
                    placeholder="Your Message"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-500 text-2xl mr-4" />
                  <span>12/17 Bonani, Uttara, Dhaka</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-red-500 text-2xl mr-4" />
                  <span>(+880) 195403-23934</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-red-500 text-2xl mr-4" />
                  <span>bikeEease123@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
