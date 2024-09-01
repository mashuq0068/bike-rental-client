import React, { useState, useEffect } from "react";
import { Table, Button, Modal, notification } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import "antd/dist/reset.css";

// Define the Bike interface
interface Bike {
  _id: string;
  name: string;
  description: string;
  price: string;
  cc: string;
  year: string;
  model: string;
  brand: string;
  availability: string;
}

// Define the form inputs interface
interface BikeFormInputs {
  name: string;
  description: string;
  price: string;
  cc: string;
  year: string;
  model: string;
  brand: string;
  availability: string;
}

const BikeManagement: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBike, setCurrentBike] = useState<Bike | null>(null);

  // Initialize default bikes (you can fetch from an API)
  useEffect(() => {
    const defaultBikes: Bike[] = [
      {
        _id: "1",
        name: "Mountain Explorer",
        description: "A sturdy mountain bike suitable for all terrains.",
        price: "1200",
        cc: "200",
        year: "2021",
        model: "MX200",
        brand: "TrailBlazer",
        availability: "Available",
      },
      // Add more bikes as needed
    ];
    setBikes(defaultBikes);
  }, []);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BikeFormInputs>();

  // Open modal for Create or Edit
  const openModal = (bike: Bike | null) => {
    setCurrentBike(bike);
    reset();
    if (bike) {
      reset(bike as Bike);
    } else {
      reset();
    }
    setIsModalOpen(true);
   
  };

  // Handle form submission
  const onSubmit: SubmitHandler<BikeFormInputs> = (data) => {
    console.log(data);
    setIsModalOpen(false);
  };

  // Handle bike deletion
  const openDeleteConfirmation = (bike: Bike) => {
    Modal.confirm({
      title: "Are you sure you want to delete this bike?",
      content: `Bike: ${bike.name}`,
      okText: "Yes",
      cancelText: "No",
      onOk: () => handleDelete(bike._id),
    });
  };

  const handleDelete = (bikeId: string) => {
    notification.success({
      message: "Success",
      description: "The bike has been successfully deleted.",
      placement: "topRight",
      duration: 3,
    });
  };

  // Columns for the Ant Design table
  const columns = [
    {
      title: "Name",
      //   data index is the main thing
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "CC",
      dataIndex: "cc",
      key: "cc",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
    },
    {
      title: "Actions",
      key: "actions",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (text: any, record: Bike) => (
        <div className="space-x-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => openModal(record)}
            className="bg-red-500 hover:bg-red-600"
          >
            Edit
          </Button>
          <Button
            onClick={() => openDeleteConfirmation(record)}
            className="hover:bg-red-600"
            type="primary"
            danger
            icon={<DeleteOutlined />}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between md:flex-row flex-col items-center mb-4">
        <h1 className="md:text-2xl text-xl font-bold text-center text-gray-800">Bike <span className="text-red-500">Management</span></h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-red-500 lg:my-auto my-5  hover:bg-red-600"
          onClick={() => {
            reset(), openModal(null);
          }}
        >
          Create New Bike
        </Button>
      </div>

   <div className="overflow-x-auto">
   <Table columns={columns} dataSource={bikes} pagination={undefined}/>
   </div>

      <Modal
        title={currentBike ? "Edit Bike" : "Create Bike"}
        visible={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false), reset();
        }}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Bike name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-2 border rounded"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CC</label>
            <input
              type="number"
              {...register("cc", { required: "CC is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.cc && (
              <p className="text-red-500 text-sm">{errors.cc.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year</label>
            <input
              type="number"
              {...register("year", { required: "Year is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.year && (
              <p className="text-red-500 text-sm">{errors.year.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Model</label>
            <input
              type="text"
              {...register("model", { required: "Model is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.model && (
              <p className="text-red-500 text-sm">{errors.model.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Brand</label>
            <input
              type="text"
              {...register("brand", { required: "Brand is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm">{errors.brand.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Availability</label>
            <select
              {...register("availability", {
                required: "Availability is required",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select availability</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            {errors.availability && (
              <p className="text-red-500 text-sm">
                {errors.availability.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="mr-2"
            >
              Cancel
            </Button>
            {currentBike ? (
              <Button className="bg-red-500" type="primary" htmlType="submit">
                Update
              </Button>
            ) : (
              <Button className="bg-red-500" type="primary" htmlType="submit">
                Create
              </Button>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BikeManagement;
