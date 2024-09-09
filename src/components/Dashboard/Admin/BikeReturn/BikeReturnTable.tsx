/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Modal, notification, DatePicker, Form } from "antd";
import "antd/dist/reset.css";
import dayjs, { Dayjs } from "dayjs";
import "moment-timezone";
import {
  useGetBookingsQuery,
  useReturnBikeMutation,
} from "../../../../redux/features/booking/bookingApi";
import Loader from "../../../Loader/Loader";
import { openErrorNotification } from "../../../../utils/errorNotification";
import "dayjs/locale/en-gb";
import moment from "moment-timezone";

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
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const { data, isLoading } = useGetBookingsQuery(undefined);
  const [returnBike] = useReturnBikeMutation();

  const openCalculateModal = (rental: Rental) => {
    setSelectedRental(rental);
    setEndTime(null);
  };

  const calculateCost = async (rentalId: string, _endTime: string) => {
    const data = {
      id: rentalId,
      rental: {
        returnTime: endTime,
      },
    };
    try {
      await returnBike(data).unwrap();
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

  // const handleDateChange = (date: Dayjs | null) => {
  //   if (date) {
  //     setEndTime(date.format("YYYY-MM-DD HH:mm"));
  //   }
  // };

  // Disable dates and times before the current time
  const disabledDate = (current: Dayjs | null) => {
    if (!current) return false;
    // Disable dates before today
    return current.isBefore(dayjs().startOf("day"));
  };

  const disabledTime = () => {
    const currentMoment = dayjs();
    return {
      disabledHours: () => {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        // Disable hours before current hour
        return hours.filter((hour) => hour < currentMoment.hour());
      },
      disabledMinutes: (hour: number) => {
        if (hour < dayjs().hour()) {
          return Array.from({ length: 60 }, (_, i) => i); // Disable all minutes if hour is before current hour
        }
        const currentMinute = dayjs().minute();
        // Disable minutes before current minute if within the same hour
        return Array.from({ length: 60 }, (_, i) => i).filter(
          (minute) => minute < currentMinute
        );
      },
    };
  };

  // Additional logic to handle time selection after the rental start time
  // const disabledDateAndTime = (current: Dayjs | null) => {
  //   if (!current || !selectedRental) return false;
  //   const rentalStartTime = dayjs(selectedRental.startTime);
  //   return (
  //     current.isBefore(dayjs().startOf("day")) ||
  //     current.isBefore(rentalStartTime)
  //   );
  // };

  const handleEndTimeChange = (date: Dayjs | null) => {
    if (date && selectedRental) {
      const rentalStartTime = dayjs(selectedRental.startTime);
      if (date.isBefore(rentalStartTime)) {
        notification.error({
          message: "Invalid Date",
          description: "Return time cannot be before the rental start time.",
        });
        return;
      }
      setEndTime(date.format("YYYY-MM-DD HH:mm"));
    }
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
                  {moment(rental.startTime)
                    .tz("Asia/Dhaka")
                    .format("YYYY-MM-DD h:mm A")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.returnTime ? (
                    moment(rental.returnTime)
                      .tz("Asia/Dhaka")
                      .format("YYYY-MM-DD h:mm A")
                  ) : (
                    <p className="px-3 py-2 text-red-500 rounded-lg">Pending</p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.totalCost ? (
                    `$${rental.totalCost}`
                  ) : (
                    <p className="px-3 py-2 text-red-500 rounded-lg">Pending</p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.isReturned ? (
                    <p className="px-3 py-2 text-green-500 rounded-lg">
                      Returned
                    </p>
                  ) : (
                    <p className="px-3 py-2 text-red-500 rounded-lg">
                      Not Returned
                    </p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {rental?.isReturned ? (
                    <p className="px-3 py-2 text-green-500 rounded-lg">
                      Calculated
                    </p>
                  ) : (
                    <Button
                      onClick={() => openCalculateModal(rental)}
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
                onChange={handleEndTimeChange}
                value={endTime ? dayjs(endTime) : null}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default BikeReturnTable;
