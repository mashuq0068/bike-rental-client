import { DatePicker, Input, Modal } from "antd";
import { useState } from "react";
import { useGetSingleBikeQuery } from "../../redux/features/bike/bikeApi";
import { useNavigate, useParams } from "react-router-dom";

const BikeDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBikeQuery(id);
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null | string>(null);

  const handleStartTimeChange = (value: Date | null | string) => {
    const decodedDateStr = decodeURIComponent(value as string);
    const dateObj = new Date(decodedDateStr);
    const isoDateStr = dateObj.toISOString();
    setStartTime(isoDateStr);
  };

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const handlePayment = (id: string) => {
    navigate(`/dashboard/user/advance-payment/${id}/${startTime}`);
  };

  return (
    <div className="min-h-screen py-10 px-5 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={data?.data?.image}
          alt={data?.data?.model}
          className="w-full h-64 object-contain"
        />
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {data?.data?.brand} {data?.data?.model}
          </h1>
          <p className="text-gray-700 mb-6">{data?.data?.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-lg font-medium">Price</h2>
              <p className="text-gray-700">{data?.data?.pricePerHour} (per hour)</p>
            </div>
            <div>
              <h2 className="text-lg font-medium">Engine Capacity (CC)</h2>
              <p className="text-gray-700">{data?.data?.cc}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium">Year</h2>
              <p className="text-gray-700">{data?.data?.year}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium">Availability</h2>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  data?.data?.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {data?.data?.isAvailable ? "Available" : "Not Available"}
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
                  onChange={handleStartTimeChange}
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
              {startTime ? (
                <button
                  onClick={() => handlePayment(data?.data?._id)}
                  className="w-full py-3 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                >
                  Pay Now
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3 bg-red-300 text-white rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  Select Start Time to Pay
                </button>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
