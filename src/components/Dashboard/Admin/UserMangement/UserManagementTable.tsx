import React, { useState } from 'react';
import { Table, Button, Modal, notification } from 'antd';
import { ColumnsType } from 'antd/es/table';
// import 'antd/dist/antd.css'; // Import Ant Design styles

interface User {
  key: string;
  name: string;
  email: string;
  role: string;
}

const usersData: User[] = [
  { key: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
  { key: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  // Add more user data here
];

const UserManagementTable = () => {
  const [users, setUsers] = useState<User[]>(usersData);

  const deleteUser = (key: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this user?',
      content: `User: ${key}`,
      okText: 'Yes',
      cancelText: 'No',
      okButtonProps: {
        className: 'bg-red-500 text-white hover:bg-red-600 border-red-500',
      },
      cancelButtonProps: {
        className: 'bg-gray-300 text-black hover:bg-gray-400',
      },
      onOk: () => {
        // setUsers(users.filter(user => user.key !== key));
        notification.success({
          message: 'Success',
          description: 'User has been successfully deleted.',
          placement: 'topRight',
          duration: 3,
        });
      },
    });
  };

  const promoteToAdmin = (key: string) => {
    // setUsers(users.map(user =>
    //   user.key === key ? { ...user, role: 'Admin' } : user
    // ));
    notification.success({
      message: 'Success',
      description: 'User has been promoted to admin.',
      placement: 'topRight',
      duration: 3,
    });
  };

  const columns: ColumnsType<User> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            type="primary"
            className="bg-green-500 text-white hover:bg-green-600"
            onClick={() => promoteToAdmin(record.key)}
          >
            Promote to Admin
          </Button>
          <Button
            // type="danger"
            className="bg-red-500 text-white hover:bg-red-600"
            onClick={() => deleteUser(record.key)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="md:text-2xl text-xl font-bold text-gray-800 text-center mb-8"><span className='text-red-500'>User</span> Management</h1>
      <Table
        dataSource={users}
        columns={columns}
        pagination={undefined}
        className="overflow-x-auto"
      />
    </div>
  );
};

export default UserManagementTable;
