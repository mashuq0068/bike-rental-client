import { useEffect, useState } from "react";
import { Modal, Button, Input, Form, notification } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

// Define the Coupon interface
interface Coupon {
  id: string;
  code: string;
  discount: string;
  expiryDate: string;
}

// Define the form inputs interface
interface CouponFormInputs {
  code: string;
  discount: string;
  expiryDate: string;
}

const CouponManagementTable = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: "1",
      code: "SUMMER21",
      discount: "20%",
      expiryDate: "2024-12-31",
    },
    {
      id: "2",
      code: "WINTER22",
      discount: "15%",
      expiryDate: "2024-12-01",
    },
  ]);
  const [currentCoupon, setCurrentCoupon] = useState<Coupon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    openWarningNotification(
      "Warning",
      "This page is under development. So you can't manage your coupons"
    );
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CouponFormInputs>();
  const openWarningNotification = (message: string, description: string) => {
    notification.warning({
      message: message,
      description: description,
      placement: "topRight",
      duration: 5, // Duration in seconds
    });
  };
  // Open modal for Create or Edit
  const openModal = (coupon: Coupon | null) => {
    setCurrentCoupon(coupon);
    if (coupon) {
      reset(coupon);
    } else {
      reset();
    }
    setIsModalOpen(true);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<CouponFormInputs> = (data) => {
    if (currentCoupon) {
      // Edit existing coupon
      setCoupons((prev) =>
        prev.map((coupon) =>
          coupon.id === currentCoupon.id ? { ...coupon, ...data } : coupon
        )
      );
    } else {
      // Create new coupon
      setCoupons((prev) => [
        ...prev,
        { id: (prev.length + 1).toString(), ...data },
      ]);
    }
    setIsModalOpen(false);
  };

  // Handle coupon deletion
  const openDeleteConfirmation = (coupon: Coupon) => {
    Modal.confirm({
      title: "Are you sure you want to delete this coupon?",
      content: `Coupon: ${coupon.code}`,
      okText: "Yes",
      cancelText: "No",
      onOk: () => handleDelete(coupon.id),
    });
  };

  const handleDelete = (couponId: string) => {
    setCoupons((prev) => prev.filter((coupon) => coupon.id !== couponId));
    Modal.success({
      content: "Coupon deleted successfully.",
    });
  };

  return (
    <div className="p-6 bg-white container rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Coupon Management</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-red-500 hover:bg-red-600"
          onClick={() => openModal(null)}
        >
          Create New Coupon
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 px-4 border-b">Code</th>
              <th className="py-2 px-4 border-b">Discount</th>
              <th className="py-2 px-4 border-b">Expiry Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{coupon.code}</td>
                <td className="py-2 px-4 border-b">{coupon.discount}</td>
                <td className="py-2 px-4 border-b">{coupon.expiryDate}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      className="bg-blue-500 hover:bg-blue-600"
                      onClick={() => openModal(coupon)}
                    >
                      Edit
                    </Button>
                    <Button
                      icon={<DeleteOutlined />}
                      className="bg-red-500 hover:bg-red-600"
                      onClick={() => openDeleteConfirmation(coupon)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        title={currentCoupon ? "Edit Coupon" : "Create Coupon"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Coupon Code" required>
            <Input
              {...register("code", { required: "Coupon code is required" })}
              placeholder="Enter coupon code"
            />
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code.message}</p>
            )}
          </Form.Item>
          <Form.Item label="Discount" required>
            <Input
              {...register("discount", { required: "Discount is required" })}
              placeholder="Enter discount (e.g., 20%)"
            />
            {errors.discount && (
              <p className="text-red-500 text-sm">{errors.discount.message}</p>
            )}
          </Form.Item>
          <Form.Item label="Expiry Date" required>
            <Input
              type="date"
              {...register("expiryDate", {
                required: "Expiry date is required",
              })}
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">
                {errors.expiryDate.message}
              </p>
            )}
          </Form.Item>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              {currentCoupon ? "Update" : "Create"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CouponManagementTable;
