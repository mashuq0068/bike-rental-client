/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Modal, notification, DatePicker, Form } from "antd";
import "antd/dist/reset.css";
import moment, { Moment } from "moment";
import {
  useGetBookingsQuery,
  useReturnBikeMutation,
} from "../../../../redux/features/booking/bookingApi";
import Loader from "../../../Loader/Loader";
import { openErrorNotification } from "../../../../utils/errorNotification";

// Define the Rental interface
interface Rental {
  _id: string;
  bikeName: string;
  renterName: string;
  startTime: string;
  endTime: string;
  cost: number;
  status: string;
  isReturned: boolean;
}

const BikeReturnTable = () => {
  // const [rentalList, setRentalList] = useState<Rental[]>(rentals);
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const { data, isLoading } = useGetBookingsQuery(undefined);
  console.log(data);
  const [returnBike] = useReturnBikeMutation();

  // Open modal for Calculate Cost
  const openCalculateModal = (rental: Rental) => {
    setSelectedRental(rental);
    setEndTime(null); // Reset end time when opening the modal
  };

  // Calculate cost and update status
  const calculateCost = async (rentalId: string, _endTime: string) => {
    // Placeholder cost calculation logic
    const data = {
      id: rentalId,
      rental: {
        returnTime: endTime,
      },
    };
    try {
      const res = await returnBike(data).unwrap();
      console.log(res);
      notification.success({
        message: "Success",
        description: "Bike calculation successfully done.",
        placement: "topRight",
        duration: 3,
      });
    } catch (err: any) {
      openErrorNotification(err?.data?.message);
    }
  };

  const handleDateChange = (date: Moment | null) => {
    if (date) {
      setEndTime(date.format("YYYY-MM-DD HH:mm a"));
    }
  };

  // Disable dates and times before the current time (Bangladesh time)
  const disabledDate = (current: any) => {
    return current && moment(current).isBefore(moment().startOf("day"));
  };

  const disabledTime = () => {
    const currentHour = moment().hour();
    const currentMinute = moment().minute();

    return {
      disabledHours: () =>
        Array.from({ length: 24 }, (_, i) => i).filter(
          (hour) => hour < currentHour
        ),
      disabledMinutes: (hour: number) =>
        hour === currentHour
          ? Array.from({ length: 60 }, (_, i) => i).filter(
              (minute) => minute < currentMinute
            )
          : [],
    };
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="md:text-2xl text-xl  font-bold text-gray-800 mb-8">
        Return <span className="text-red-500">Bike</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bike Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Renter Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.data?.map((rental: any) => (
              <tr key={rental.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {rental?.bikeId?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental?.userId?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.startTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.returnTime ? (
                    rental?.returnTime
                  ) : (
                    <p className="px-3 py-2   text-red-500 rounded-lg">
                      Pending
                    </p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.totalCost ? (
                    `$${rental.totalCost}`
                  ) : (
                    <p className="px-3 py-2  text-red-500 rounded-lg">
                      Pending
                    </p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.isReturned ? (
                    <p className="px-3 py-2 text-green-500   rounded-lg">
                      Returned
                    </p>
                  ) : (
                    <p className="px-3 py-2 text-red-500   rounded-lg">
                      Not Returned
                    </p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {rental?.isReturned ? (
                    <p className="px-3 py-2 text-green-500  rounded-lg">
                      Calculated
                    </p>
                  ) : (
                    <Button
                      className="bg-red-500 text-white hover:bg-red-600"
                      type="primary"
                      htmlType="submit"
                    >
                      Calculate
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calculate Cost Modal */}
      <Modal
        title="Calculate Cost"
        open={!!selectedRental}
        onCancel={() => setSelectedRental(null)}
        footer={null}
      >
        {selectedRental && (
          <Form
            onFinish={() => {
              if (selectedRental && endTime) {
                calculateCost(selectedRental._id, endTime);
                setSelectedRental(null); // Close the modal after submission
              }
            }}
          >
            <p className="mb-4">
              Calculate cost for bike <strong>{selectedRental.bikeName}</strong>
              ?
            </p>
            <Form.Item
              label="Submit End Time"
              name="endTime"
              rules={[
                {
                  required: true,
                  message: "Please select the end time!",
                },
              ]}
            >
              <DatePicker
                showTime={{ use12Hours: true, format: "h:mm a" }}
                format="YYYY-MM-DD h:mm a"
                disabledDate={disabledDate}
                disabledTime={disabledTime}
                onChange={handleDateChange}
                value={endTime ? moment(endTime) : null}
              />
            </Form.Item>
            <div className="flex justify-end">
              <Button
                className="mr-2"
                onClick={() => {
                  setSelectedRental(null);
                  setEndTime(null); // Reset end time when canceling
                }}
              >
                Cancel
              </Button>

              <Button
                className="bg-red-500 text-white hover:bg-red-600"
                type="primary"
                htmlType="submit"
              >
                Calculate
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default BikeReturnTable;
