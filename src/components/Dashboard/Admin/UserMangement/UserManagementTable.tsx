/* eslint-disable @typescript-eslint/no-explicit-any */

import { Table, Button, Modal, notification, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined, CrownOutlined } from '@ant-design/icons';

import {
  useDeleteSingleUserMutation,
  useGetAllUsersQuery,
  useUpdateSingleUserMutation,
} from "../../../../redux/features/user/userApi";
import { openErrorNotification } from "../../../../utils/errorNotification";
import Loader from "../../../Loader/Loader";
import { GrUserAdmin } from "react-icons/gr";

// import 'antd/dist/antd.css'; // Import Ant Design styles

interface User {
  _id: string;
  key: string;
  name: string;
  email: string;
  role: string;
}

// const usersData: User[] = [
//   { key: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
//   { key: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
//   // Add more user data here
// ];

const UserManagementTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [users] = useState<User[]>(usersData);
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const [updateUser] = useUpdateSingleUserMutation();
  const [deleteSingluser] = useDeleteSingleUserMutation();

  const deleteUser = async(user: User) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      content: `User: ${user?.name}`,
      okText: "Yes",
      cancelText: "No",
      okButtonProps: {
        className: "bg-red-500 text-white hover:bg-red-600 border-red-500",
      },
      cancelButtonProps: {
        className: "bg-gray-300 text-black hover:bg-gray-400",
      },
      onOk: async () => {
        try {
          await deleteSingluser(user?._id).then(() => {
            notification.success({
              message: "Success",
              description: "User has been successfully deleted.",
              placement: "topRight",
              duration: 3,
            });
          });
        } catch (error) {
          notification.error({
            message: "Error",
            description: "Failed to delete user.",
            placement: "topRight",
            duration: 3,
          });
        }
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const promoteToAdmin = async (user: User) => {
    try {
      const data = {
        id: user?._id,
        user: {
          role: "admin",
        },
      };
      await updateUser(data).unwrap();
      notification.success({
        message: "Success",
        description: "User has been promoted to admin.",
        placement: "topRight",
        duration: 3,
      });
    } catch (err: any) {
      openErrorNotification(err?.data?.message);
    }
  };

  const columns: ColumnsType<User> = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Action",
      render: (_, record) => (
        <div className="flex space-x-3 items-center">
          {/* Admin Role Indicator */}
          {record.role === "admin" ? (
            <div className="flex items-center bg-green-100 text-green-500 px-3 py-2 rounded-lg text-sm font-medium">
              <GrUserAdmin className="mr-2" />
              Admin
            </div>
          ) : (
            // Promote to Admin Button
            <Tooltip title="Promote to Admin">
              <Button
                type="default"
                icon={<GrUserAdmin />}
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                onClick={() => promoteToAdmin(record)}
              >
                Promote
              </Button>
            </Tooltip>
          )}
      
          {/* Delete User Button */}
          <Tooltip title="Delete User">
            <Button
              type="default"
              icon={<DeleteOutlined />}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              onClick={() => deleteUser(record)}
            >
              Delete
            </Button>
          </Tooltip>
        </div>
      )
    },
  ];
  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="md:text-2xl text-xl font-bold text-gray-800  mb-8">
        <span className="text-red-500">User</span> Management
      </h1>
      <Table
        dataSource={data?.data}
        columns={columns}
        pagination={undefined}
        className="overflow-x-auto"
      />
    </div>
  );
};

export default UserManagementTable;
