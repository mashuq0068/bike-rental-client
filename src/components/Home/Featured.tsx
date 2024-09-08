/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useGetBikesQuery } from "../../redux/features/bike/bikeApi";
import Loader from "../Loader/Loader";

const FeaturedSection = () => {
  const { data, isLoading } = useGetBikesQuery(undefined);
  const navigate = useNavigate();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-700">
          Available <span className="text-red-500">bikes</span>
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {data?.data?.slice(0, 8)?.map((bike: any) => (
            <div
              key={bike?.id}
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={bike?.image}
                alt={`${bike?.brand} bike?`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
                  {bike?.brand}
                </h3>
                <button
                  onClick={() =>
                    navigate(`/dashboard/user/bike-details/${bike?._id}`)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Detail
                </button>
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
