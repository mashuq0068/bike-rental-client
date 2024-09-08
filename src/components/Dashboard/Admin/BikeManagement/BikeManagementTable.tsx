/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Table, Button, Modal, notification, Spin } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import "antd/dist/reset.css";
import {
  useAddBikeMutation,
  useDeleteSingleBikeMutation,
  useGetBikesQuery,
  useUpdateSingleBikeMutation,
} from "../../../../redux/features/bike/bikeApi";

// Define the Bike interface
interface Bike {
  _id: string;
  image?: string;
  name: string;
  description: string;
  pricePerHour: string;
  cc: string;
  year: string;
  model: string;
  brand: string;
  isAvailable: string;
}

// Define the form inputs interface
interface BikeFormInputs {
  name: string;
  image?: string;
  description: string;
  pricePerHour: string;
  cc: string;
  year: string;
  model: string;
  brand: string;
  isAvailable: string;
}

const BikeManagement = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const { data, isLoading, isFetching } = useGetBikesQuery(undefined);
  const [createBike] = useAddBikeMutation();
  const [updateBike] = useUpdateSingleBikeMutation();
  const [deleteBike] = useDeleteSingleBikeMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBike, setCurrentBike] = useState<Bike | null>(null);
  console.log(currentBike);
  console.log(bikes);

  // Initialize default bikes (you can fetch from an API)
  useEffect(() => {
    setBikes(data?.data);
  }, [data?.data]);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BikeFormInputs>();

  // Open modal for Create or Edit
  const openModal = (bike: Bike | null) => {
    if (bike) {
      reset(bike); // Fill the form with the selected bike's data
    } else {
      reset({
        // Clear the form and set default values if needed
        name: "",
        image: "",
        description: "",
        pricePerHour: "",
        cc: "",
        year: "",
        model: "",
        brand: "",
        isAvailable: "",
      });
    }
    setCurrentBike(bike);
    setIsModalOpen(true);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<BikeFormInputs> = async (formData) => {
    // Debugging: Check the formData object
    console.log("Form Data:", formData);
    console.log(formData);

    const processedData = {
      ...formData,
      pricePerHour: Number(formData.pricePerHour),
      cc: Number(formData.cc),
      year: Number(formData.year),
      isAvailable: formData.isAvailable === "true" ? true : false,
    };

    try {
      if (currentBike) {
        const dataForUpdate = {
          id: currentBike._id,
          bike: processedData,
        };
        await updateBike(dataForUpdate).unwrap();
        notification.success({
          message: "Success",
          description: "The bike has been successfully updated.",
          placement: "topRight",
          duration: 3,
        });
      } else {
        await createBike(processedData).unwrap();
        notification.success({
          message: "Success",
          description: "The bike has been successfully created.",
          placement: "topRight",
          duration: 3,
        });
      }
      setIsModalOpen(false);
    } catch (error:any) {
      console.log("Submission Error:", error);
      notification.error({
        message: "Error",
        description: `${error?.data?.message}`,
        placement: "topRight",
        duration: 3,
      });
    }
  };

  // Handle bike deletion
  const openDeleteConfirmation = (bike: Bike) => {
    Modal.confirm({
      title: "Are you sure you want to delete this bike?",
      content: `Bike: ${bike.name}`,
      okText: "Yes",
      cancelText: "No",
      onOk: () => handleDelete(bike?._id),
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = async(bikeId: string) => {
   try{
    await deleteBike(bikeId).unwrap()
    notification.success({
      message: "Success",
      description: "The bike has been successfully deleted.",
      placement: "topRight",
      duration: 3,
    });
   }
   catch (err: any) {
    notification.error({
      message: "Error",
      description: `${err?.data?.message}`,
      placement: "topRight",
      duration: 3,
    });
  }
  };
  // handle create

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
      dataIndex: "pricePerHour",
      key: "pricePerHour",
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
      dataIndex: "isAvailable",
      key: "isAvailable",
      render: (isAvailable: boolean) =>
        isAvailable ? "Available" : "Unavailable",
    },
    {
      title: "Actions",
      key: "actions",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_text: any, record: Bike) => (
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
  if (isLoading || isFetching) {
    return <Spin className="custom-spin fixed top-[50%] left-[50%]" />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between md:flex-row flex-col items-center mb-4">
        <h1 className="md:text-2xl text-xl font-bold text-center text-gray-800">
          Bike <span className="text-red-500">Management</span>
        </h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-red-500 lg:my-auto my-5  hover:bg-red-600"
          onClick={() => openModal(null)} // Pass null to openModal for creating a new bike
        >
          Create New Bike
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={bikes} pagination={undefined} />
      </div>

      <Modal
        title={currentBike ? "Edit Bike" : "Create Bike"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
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
            <label className="block text-gray-700">Image</label>
            <input
              type="text"
              {...register("image", { required: "Bike image is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
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
            <label className="block text-gray-700">pricePerHour</label>
            <input
              type="number"
              {...register("pricePerHour", {
                required: "pricePerHour is required",
              })}
              className="w-full p-2 border rounded"
            />
            {errors.pricePerHour && (
              <p className="text-red-500 text-sm">
                {errors.pricePerHour.message}
              </p>
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
              {...register("isAvailable", {
                required: "Availability is required",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select availability</option>
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
            {errors.isAvailable && (
              <p className="text-red-500 text-sm">
                {errors.isAvailable.message}
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
