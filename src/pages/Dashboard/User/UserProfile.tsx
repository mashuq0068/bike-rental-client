import { notification } from "antd";
import  { useEffect, useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

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

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfile>({
    defaultValues: profile,
  });

  const onSubmit = (data: UserProfile) => {
    setProfile(data);
    // Here you would normally send the updated data to your backend
    console.log("Updated Profile:", data);
  };
  const openNotification = () => {
    notification.open({
      message: `Welcome back, ${profile.name}!`,
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
  };

  // Show the notification when the component is mounted
  useEffect(() => {
    let isNotificationShown = false;

    if (!isNotificationShown) {
      openNotification();
      isNotificationShown = true;
    }
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Welcome Message */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-red-500">Welcome</span>, {profile.name}!
        </h1>
        <p className="text-gray-600">Update your profile information below.</p>
      </div>

      {/* Profile Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Profile Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Name</h3>
            <p className="text-gray-600">{profile.name}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">{profile.email}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Phone</h3>
            <p className="text-gray-600">{profile.phone}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">Address</h3>
            <p className="text-gray-600">{profile.address}</p>
          </div>
        </div>
      </div>

      {/* Update Profile Form */}
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
