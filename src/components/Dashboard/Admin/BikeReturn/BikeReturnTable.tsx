/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Modal, notification, DatePicker, Form } from "antd";
import "antd/dist/reset.css";
import dayjs, { Dayjs } from "dayjs";
import "moment-timezone";
import { useGetBookingsQuery, useReturnBikeMutation } from "../../../../redux/features/booking/bookingApi";
import Loader from "../../../Loader/Loader";
import { openErrorNotification } from "../../../../utils/errorNotification";
import "dayjs/locale/en-gb";
import moment from "moment-timezone";
import DataTable from "react-data-table-component";

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
    const data = { id: rentalId, rental: { returnTime: endTime } };
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

  const disabledDate = (current: Dayjs | null) => current && current.isBefore(dayjs().startOf("day"));
  const disabledTime = () => {
    const currentMoment = dayjs();
    return {
      disabledHours: () => Array.from({ length: 24 }, (_, i) => i).filter(hour => hour < currentMoment.hour()),
      disabledMinutes: (hour: number) =>
        hour < dayjs().hour() ? Array.from({ length: 60 }, (_, i) => i) : Array.from({ length: 60 }, (_, i) => i).filter(minute => minute < dayjs().minute()),
    };
  };

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

  const columns = [
    {
      name: "Bike Name",
      selector: (rental: any) => rental?.bikeId?.name,
      sortable: true,
    },
    {
      name: "Renter Name",
      selector: (rental: any) => rental?.userId?.name,
      sortable: true,
    },
    {
      name: "Start Time",
      selector: (rental: any) => moment(rental.startTime).tz("Asia/Dhaka").format("YYYY-MM-DD h:mm A"),
      sortable: true,
    },
    {
      name: "End Time",
      selector: (rental: any) =>
        rental.returnTime ? moment(rental.returnTime).tz("Asia/Dhaka").format("YYYY-MM-DD h:mm A") : <p className="text-red-500">Pending</p>,
    },
    {
      name: "Cost",
      selector: (rental: any) => (rental.totalCost ? `$${rental.totalCost}` : <p className="text-red-500">Pending</p>),
    },
    {
      name: "Status",
      selector: (rental: any) =>
        rental.isReturned ? <p className="text-green-500">Returned</p> : <p className="text-red-500">Not Returned</p>,
    },
    {
      name: "Actions",
      cell: (rental: any) =>
        rental.isReturned ? (
          <p className="text-green-500">Calculated</p>
        ) : (
          <Button onClick={() => openCalculateModal(rental)} className="bg-red-500 text-white hover:bg-red-600" type="primary">
            Calculate
          </Button>
        ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="md:text-2xl text-xl font-bold text-gray-800 mb-8">
        Return <span className="text-red-500">Bike</span>
      </h1>
      <DataTable columns={columns} data={data?.data ?? []} pagination />

      <Modal title="Calculate Cost" open={!!selectedRental} onCancel={() => setSelectedRental(null)} footer={null}>
        {selectedRental && (
          <Form
            onFinish={() => {
              if (selectedRental && endTime) {
                calculateCost(selectedRental._id, endTime);
                setSelectedRental(null);
              }
            }}
          >
            <p className="mb-4">
              Calculate cost for bike <strong>{selectedRental.bikeName}</strong>?
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
