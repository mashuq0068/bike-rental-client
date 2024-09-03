import { useState } from "react";
import { Modal, Input, DatePicker } from "antd";

const BikeDetailData = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // Example bike details (replace with real data)
  const bike = {
    id: 1,
    brand: "Yamaha",
    model: "YZF-R3",
    description:
      "The Yamaha YZF-R3 is an entry-level sportbike with a powerful 321cc engine, sleek design, and excellent handling, making it perfect for both city and highway riding.",
    price: "$5,299",
    cc: "321cc",
    year: "2023",
    availability: "Available",
    image: "https://tse3.mm.bing.net/th?id=OIP.XRcgqNmoqjQ-leet0vxZ6AHaEo&pid=Api&P=0&h=220",
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePayment = () => {
    // Redirect to payment page or handle payment logic
    console.log("Redirecting to payment...");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={bike.image}
          alt={bike.model}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{bike.brand} {bike.model}</h1>
          <p className="text-gray-700 mb-6">{bike.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold">Price</h2>
              <p className="text-gray-700">{bike.price}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Engine Capacity (CC)</h2>
              <p className="text-gray-700">{bike.cc}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Year</h2>
              <p className="text-gray-700">{bike.year}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Brand</h2>
              <p className="text-gray-700">{bike.brand}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Availability</h2>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  bike.availability === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {bike.availability}
              </span>
            </div>
          </div>

          <button
            onClick={showModal}
            className="w-full py-3 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors duration-300"
          >
            Book Now
          </button>

          {/* Booking Modal */}
          <Modal
            title="Book Your Ride"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            className="rounded-lg"
          >
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Start Time
                </label>
                <DatePicker
                  showTime
                  placeholder="Select Start Time"
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Payment Amount
                </label>
                <Input value="TK 100" disabled />
              </div>
              <button
                onClick={handlePayment}
                className="w-full py-3 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Pay Now
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BikeDetailData;
