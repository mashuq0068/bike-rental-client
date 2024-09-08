/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/user/userApi";
import { openErrorNotification } from "../../../utils/errorNotification";
import { openSuccessNotification } from "../../../utils/successNotification";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}
const defaultProfile: UserProfile = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1234567890",
  address: "123 Main St, City, Country",
};

const UserProfile: React.FC = () => {
  const { data, isLoading, isFetching  } = useGetProfileQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  console.log(data);
  const [profileData, setProfileData] = useState<UserProfile | undefined>(
    undefined
  );

  const { name, email, phone, address } = profileData ?? defaultProfile;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserProfile>({
    defaultValues: profileData,
  });

  useEffect(() => {
    if (data?.data) {
      setProfileData(data.data);
      openNotification();
      reset(data.data); // Reset the form with fetched data
    }
  }, [data?.data, reset ]);

  const onSubmit = async (formData: UserProfile) => {
    // Here you would normally send the updated data to your backend
    try {
      await updateProfile(formData).unwrap();
      openSuccessNotification("Your profile updated successfully");
    
      
    } catch (err: any) {
      openErrorNotification(`${err?.data?.message}`);
    }
  };

  const openNotification = () => {
    if(data?.data?.name){
      notification.open({
        message: `Welcome back, ${data?.data?.name}!`,
        description: "We hope you have a great experience updating your profile.",
        icon: <SmileOutlined style={{ color: "#52c41a" }} />,
        style: {
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          color: "#333",
        },
        placement: "topRight",
      });
    }
   
  };

  if (isLoading || isFetching) {
    return <Spin className="custom-spin fixed top-[50%] left-[50%]" />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-red-500">Welcome</span>, {name}
        </h1>
        <p className="text-gray-600">Update your profile information below.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Profile Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Name</h3>
            <p className="text-gray-600">{name}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">{email}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Phone</h3>
            <p className="text-gray-600">{phone}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Address</h3>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-red-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-red-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-red-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              {...register("address", { required: "Address is required" })}
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-red-500"
              rows={4}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
