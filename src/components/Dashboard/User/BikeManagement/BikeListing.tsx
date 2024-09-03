import  { useState } from "react";
import { Link } from "react-router-dom";

const bikes = [
  {
    id: 1,
    brand: "Yamaha",
    model: "YZF-R3",
    availability: "Available",
    image: "https://tse3.mm.bing.net/th?id=OIP.XRcgqNmoqjQ-leet0vxZ6AHaEo&pid=Api&P=0&h=220",
  },
  {
    id: 2,
    brand: "Honda",
    model: "CBR500R",
    availability: "Rented",
    image: "https://tse1.mm.bing.net/th?id=OIP.Eo_HL5wVV4Njb7aagf31KAHaEK&pid=Api&P=0&h=220",
  },
  // Add more bike data as needed
];

const BikeListing = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");

//   const filteredBikes = bikes.filter(
//     (bike) =>
//       (selectedBrand === "" || bike.brand === selectedBrand) &&
//       (selectedModel === "" || bike.model === selectedModel) &&
//       (selectedAvailability === "" || bike.availability === selectedAvailability)
//   );

  return (
    <div className="min-h-screen container py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10"><span className="text-red-500">Bike</span> Listing</h1>

      {/* Filter Section */}
      <div className="flex justify-center space-x-5 mb-10">
        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Yamaha">Yamaha</option>
          <option value="Honda">Honda</option>
          {/* Add more brand options */}
        </select>

        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">All Models</option>
          <option value="YZF-R3">YZF-R3</option>
          <option value="CBR500R">CBR500R</option>
          {/* Add more model options */}
        </select>

        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedAvailability}
          onChange={(e) => setSelectedAvailability(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
          {/* Add more availability options */}
        </select>
      </div>

      {/* Bike Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {bikes?.map((bike) => (
          <div
            key={bike.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={bike.image}
              alt={bike.model}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-2">{bike.brand}</h2>
              <p className="text-gray-700 mb-4">{bike.model}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  bike.availability === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {bike.availability}
              </span>
              <Link
              to={`/dashboard/user/bike-details/${bike.id}`}
                onClick={() => console.log("View Details for bike", bike.id)}
                className="block w-full mt-5 text-center py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeListing;
