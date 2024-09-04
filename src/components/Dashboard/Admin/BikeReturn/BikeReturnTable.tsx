import { useState } from "react";
import { Button, Modal, notification } from "antd";
import "antd/dist/reset.css";

// Define the Rental interface
interface Rental {
  id: string;
  bikeName: string;
  renterName: string;
  startTime: string;
  endTime: string;
  cost: number;
  status: string;
}

const rentals: Rental[] = [
  {
    id: "1",
    bikeName: "Mountain Explorer",
    renterName: "Alice Johnson",
    startTime: "2024-08-01 10:00",
    endTime: "2024-08-07 10:00",
    cost: 0,
    status: "Active",
  },
  // Add more rental details as needed
];

const BikeReturnTable = () => {
  const [rentalList, setRentalList] = useState<Rental[]>(rentals);
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);

  // Open modal for Calculate Cost
  const openCalculateModal = (rental: Rental) => {
    setSelectedRental(rental);
  };

  // Calculate cost and update status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const calculateCost = (rentalId: string, _endTime: string) => {
    // Placeholder cost calculation logic
    const updatedRentals = rentalList.map((rental) =>
      rental.id === rentalId
        ? { ...rental, cost: 50, status: "Returned" }
        : rental
    );
    setRentalList(updatedRentals);
    setSelectedRental(null);
    notification.success({
      message: "Success",
      description: "Bike returned successfully.",
      placement: "topRight",
      duration: 3,
    });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="md:text-2xl text-xl text-center font-bold text-gray-800 mb-8">
        Return <span className="text-red-500">Bike</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bike Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Renter Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rentalList.map((rental) => (
              <tr key={rental.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {rental.bikeName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.renterName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.startTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.endTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.cost ? `$${rental.cost}` : "Pending"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {rental.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Button
                    className="bg-red-500 text-white hover:bg-red-600"
                    onClick={() => openCalculateModal(rental)}
                  >
                    Calculate
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calculate Cost Modal */}
      <Modal
        title="Calculate Cost"
        visible={!!selectedRental}
        onCancel={() => setSelectedRental(null)}
        footer={null}
      >
        {selectedRental && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedRental) {
                calculateCost(selectedRental.id, selectedRental.endTime);
              }
            }}
          >
            <p className="mb-4">
              Calculate cost for bike <strong>{selectedRental.bikeName}</strong>
              ?
            </p>
            <div className="flex justify-end">
              <Button className="mr-2" onClick={() => setSelectedRental(null)}>
                Cancel
              </Button>
              <Button
                className="bg-red-500 text-white hover:bg-red-600"
                type="primary"
                htmlType="submit"
              >
                Calculate
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default BikeReturnTable;
