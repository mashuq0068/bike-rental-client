/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, Statistic, Button, Divider, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useUpdateSingleBookingMutation } from "../../../redux/features/booking/bookingApi";
import { openErrorNotification } from "../../../utils/errorNotification";
import { openSuccessNotification } from "../../../utils/successNotification";

const Payment: React.FC = () => {
  const [updatePaymentStatus, { isLoading }] = useUpdateSingleBookingMutation();
  const { id, cost } = useParams();

  const handlePayment = async () => {
    const data = {
      id,
      rental: {
        isPaid: true,
      },
    };
    try {
      await updatePaymentStatus(data).unwrap();
      openSuccessNotification("You successfully paid for your rental");
    } catch (err: any) {
      openErrorNotification(err?.data?.message);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-10 px-5">
      <div className="max-w-3xl w-full">
        <Card
          className="rounded-2xl shadow-2xl bg-white relative overflow-hidden"
          bordered={false}
          title={
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mt-5">
                Payment Summary
              </h2>
              <p className="text-gray-500">
                Complete your payment to confirm the booking
              </p>
            </div>
          }
        >
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <Statistic
              title={
                <span className="text-xl font-semibold text-gray-700">
                  Total Amount
                </span>
              }
              value={cost}
              precision={2}
              prefix="TK"
              valueStyle={{
                color: "#3f8600",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            />
            <Statistic
              title={
                <span className="text-xl font-semibold text-gray-700">
                  Due Amount
                </span>
              }
              value={Number(cost) - 100}
              precision={2}
              prefix="TK"
              valueStyle={{
                color: "#cf1322",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            />
          </div>

          <Divider className="border-t-2 border-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Statistic
              title={
                <span className="text-xl font-semibold text-gray-700">
                  Discount
                </span>
              }
              value={0}
              precision={2}
              prefix="TK"
              valueStyle={{
                color: "#ffa500",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            />
            <Statistic
              title={
                <span className="text-xl font-semibold text-gray-700">
                  Advance Payment
                </span>
              }
              value={100}
              precision={2}
              prefix="TK"
              valueStyle={{
                color: "#1890ff",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            />
          </div>

          <Divider className="border-t-2 border-gray-200" />

          <div className="text-center">
            <Button
              type="primary"
              size="large"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 border-none text-white font-bold py-4 rounded-full transition-all duration-300"
              onClick={handlePayment}
            >
              {isLoading ? <Spin className="custom-button-spin" /> : "Pay Now"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
