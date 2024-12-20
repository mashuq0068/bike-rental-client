/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useGetBikesQuery } from "../../redux/features/bike/bikeApi";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/hooks";
import Aos from "aos";
import { useEffect } from "react";

// Define a Bike type for better type safety
interface Bike {
  id: string;
  brand: string;
  description: string;
  image: string;
  isAvailable: boolean;
}

const BikeCard = ({ bike }: { bike: Bike }) => {
  const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate(`/bikes/${bike?._id}`)}
      data-aos="fade-right"
      data-aos-duration="1000"
      key={bike.id}
      className="relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      {/* Image */}
      <img
        src={bike.image}
        alt={`${bike.brand} bike`}
        className="w-full h-[250px] object-cover transition-all duration-300 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">{bike.brand}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {bike.description || "Explore this amazing bike now!"}
        </p>
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  const searchState = useAppSelector((state) => state.search);
  const { data, isLoading } = useGetBikesQuery(searchState);
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // Filter the bikes to only include those that are available
  const availableBikes = data?.data?.filter((bike: Bike) => bike.isAvailable);

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 uppercase">
          Explore <span>Bikes</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {availableBikes?.length ? (
            availableBikes
              .slice(0, 8)
              .map((bike:any) => <BikeCard key={bike.id} bike={bike} />)
          ) : (
            <p className="text-center text-xl text-gray-600 col-span-full">
              No bikes available at the moment.
            </p>
          )}
        </div>

        {/* Explore All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/dashboard/user/all-bikes")}
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
          >
            Explore All
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
