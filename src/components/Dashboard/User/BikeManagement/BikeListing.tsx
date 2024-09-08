/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetBikesQuery } from "../../../../redux/features/bike/bikeApi";
import Loader from "../../../Loader/Loader";


const BikeListing = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedAvailability, setSelectedAvailability] = useState<string>("");

  const { data, isLoading } = useGetBikesQuery(undefined);
 

  if (isLoading) {
    return <Loader />;
  }

  // Extract unique brands and models from the bike data
  const uniqueBrands: string[] = Array.from(new Set(data?.data?.map((bike: any) => bike.brand)));
  const uniqueModels: string[] = Array.from(new Set(data?.data?.map((bike: any) => bike.model)));

  // Filter bikes based on selected options
  const filteredBikes = data?.data?.filter((bike: any) =>
    (selectedBrand === "" || bike.brand === selectedBrand) &&
    (selectedModel === "" || bike.model === selectedModel) &&
    (selectedAvailability === "" || (selectedAvailability === "Available" ? bike.isAvailable : !bike.isAvailable))
  );

  return (
    <div className="min-h-screen container py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-red-500">Bike</span> Listing
      </h1>

      {/* Filter Section */}
      <div className="flex justify-center space-x-5 mb-10">
        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand: string) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">All Models</option>
          {uniqueModels.map((model: string) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>

        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedAvailability}
          onChange={(e) => setSelectedAvailability(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
      </div>

      {/* Bike Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBikes?.map((bike: any) => (
          <div
            key={bike._id}
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
                  bike.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {bike.isAvailable ? "Available" : "Not Available"}
              </span>
              <Link
                to={`/dashboard/user/bike-details/${bike._id}`}
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
