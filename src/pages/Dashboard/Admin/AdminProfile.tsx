import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const AdminProfile = () => {
  const dataPie = [
    { name: "Hired", value: 58, color: "#82ca9d" },
    { name: "Pending", value: 24, color: "#FF9800" },
    { name: "Cancelled", value: 18, color: "#F44336" },
  ];

  const earningsData = [
    { month: "Jan", earnings: 10000 },
    { month: "Feb", earnings: 12000 },
    { month: "Mar", earnings: 15000 },
    { month: "Apr", earnings: 18500 },
    { month: "May", earnings: 17000 },
    { month: "Jun", earnings: 16000 },
    { month: "Jul", earnings: 17500 },
    { month: "Aug", earnings: 15500 },
  ];

  const bookingsData = [
    { month: "Jan", bookings: 800 },
    { month: "Feb", bookings: 850 },
    { month: "Mar", bookings: 920 },
    { month: "Apr", bookings: 985 },
    { month: "May", bookings: 880 },
    { month: "Jun", bookings: 900 },
    { month: "Jul", bookings: 940 },
    { month: "Aug", bookings: 950 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold">$8,450</h2>
          <p className="text-red-500">-2.8% from last week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">New Bookings</p>
          <h2 className="text-2xl font-bold">386</h2>
          <p className="text-green-500">+4.17% from last week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Rented Cars</p>
          <h2 className="text-2xl font-bold">214 Unit</h2>
          <p className="text-red-500">-2.8% from last week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Available Cars</p>
          <h2 className="text-2xl font-bold">89 Unit</h2>
          <p className="text-green-500">+3.45% from last week</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-bold mb-4">Earnings Summary</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Rent Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataPie} dataKey="value" nameKey="name" outerRadius={100} label>
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-4">Bookings Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bookingsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminProfile;
