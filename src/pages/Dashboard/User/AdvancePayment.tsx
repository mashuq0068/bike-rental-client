/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useCreateBookingMutation } from "../../../redux/features/booking/bookingApi";
import { openErrorNotification } from "../../../utils/errorNotification";
import { openSuccessNotification } from "../../../utils/successNotification";
import { Spin } from "antd";

const AdvancePayment = () => {
  const [createBooking , {isLoading}] = useCreateBookingMutation();
  const { id, startTime } = useParams();

  const handlePayment = async () => {
    const data = {
      bikeId: id,
      startTime,
    };
    try {
      await createBooking(data).unwrap();
      openSuccessNotification(
        "Congratulations! You successfully booked the bike"
      );
    } catch (err: any) {
      openErrorNotification(err?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        <p className="mb-4">
          Please proceed with the payment of TK 100 to confirm your booking.
        </p>
        <button
          onClick={handlePayment}
          className={`w-full py-2 text-white bg-red-500 rounded-lg`}
        >
          {isLoading ? <Spin className="custom-button-spin"/> :  "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default AdvancePayment;
