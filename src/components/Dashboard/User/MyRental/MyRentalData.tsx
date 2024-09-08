/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Tabs, Table, Button } from "antd";
import { useGetOwnBookingsQuery } from "../../../../redux/features/booking/bookingApi";
import Loader from "../../../Loader/Loader";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

interface Rental {
  _id: string;
  bikeId: {
    name: string;
  };
  startTime: string;
  returnTime: string;
  totalCost: string;
}

const MyRentalsData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("1");
  const navigate = useNavigate();
  const { data, isLoading } = useGetOwnBookingsQuery(undefined);
  console.log(data);
  console.log(data?.data);
  const handlePayment = (rental: Rental) => {
    navigate(`/dashboard/user/payment/${rental?._id}`);
  };

  const columns = [
    {
      title: "Bike Name",
      dataIndex: "bikeId",
      key: "bikeId",
      render: (bikeId: { name: string }) => bikeId?.name, // Access bikeId.name directly
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Return Time",
      dataIndex: "returnTime",
      key: "returnTime",
      render: (returnTime: string | null) =>
        returnTime ? returnTime : <p className="text-red-500">Pending</p>, // Access bikeId.name directly
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (totalCost: string) =>
        totalCost ? totalCost : <p className="text-red-500">Pending</p>, //
    },
    {
      title: "",
      key: "action",
      render: (_: any, record: Rental) =>
        activeTab === "1" && (
          <Button
            type="primary"
            className="bg-red-500 border-red-500 hover:bg-red-600"
            onClick={() => handlePayment(record)}
          >
            Pay Now
          </Button>
        ),
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8">My Rentals</h1>
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          className="ant-tabs-tab-bg-red-500"
        >
          <TabPane tab="Unpaid" key="1">
            <Table
              columns={columns}
              dataSource={data?.data?.unPaid}
              pagination={false}
              className="mt-6"
            />
          </TabPane>
          <TabPane tab="Paid" key="2">
            <Table
              columns={columns}
              dataSource={data?.data?.paid}
              pagination={false}
              className="mt-6"
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default MyRentalsData;
