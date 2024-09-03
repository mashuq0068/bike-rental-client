/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Tabs, Table, Button } from "antd";

const { TabPane } = Tabs;

interface Rental {
  key: string;
  bikeName: string;
  startTime: string;
  returnTime: string;
  totalCost: string;
}

const MyRentalsData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  // Fake data for rentals (replace with real data)
  const paidRentals: Rental[] = [
    {
      key: "1",
      bikeName: "Yamaha YZF-R3",
      startTime: "2024-09-01 10:00 AM",
      returnTime: "2024-09-02 10:00 AM",
      totalCost: "TK 2000",
    },
    {
      key: "2",
      bikeName: "Honda CBR500R",
      startTime: "2024-09-03 09:00 AM",
      returnTime: "2024-09-04 09:00 AM",
      totalCost: "TK 2500",
    },
  ];

  const unpaidRentals: Rental[] = [
    {
      key: "1",
      bikeName: "Kawasaki Ninja 300",
      startTime: "2024-09-05 08:00 AM",
      returnTime: "2024-09-06 08:00 AM",
      totalCost: "TK 2200",
    },
    {
      key: "2",
      bikeName: "Suzuki GSX-R750",
      startTime: "2024-09-07 07:00 AM",
      returnTime: "2024-09-08 07:00 AM",
      totalCost: "TK 2400",
    },
  ];

  const columns = [
    {
      title: "Bike Name",
      dataIndex: "bikeName",
      key: "bikeName",
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
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
    {
      title: "",
      key: "action",
      render: (_: any, record: Rental) => (
        activeTab === "1" && (
          <Button
            type="primary"
            className="bg-red-500 border-red-500 hover:bg-red-600"
            onClick={() => handlePayment(record.key)}
          >
            Pay Now
          </Button>
        )
      ),
    },
  ];

  const handlePayment = (key: string) => {
    // Redirect to payment page or handle payment logic
    console.log("Redirecting to payment for rental:", key);
  };

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
              dataSource={unpaidRentals}
              pagination={false}
              className="mt-6"
            />
          </TabPane>
          <TabPane tab="Paid" key="2">
            <Table
              columns={columns}
              dataSource={paidRentals}
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
