import React, { useState } from 'react';
import './Table.css'; // Use a specific CSS file for table styles

const Table = ({ employees, handleEdit, handleDelete, handleView }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.contactInfo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="employee-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Contact Info</th>
            <th>Received Date</th>
            <th>Inventory Received</th>
            <th>Reported Status</th>
            <th>Assigned Technician</th>
            <th>Estimated Amount</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.clientName}</td>
              <td>{employee.contactInfo}</td>
              <td>{employee.receivedDate}</td>
              <td>{employee.inventoryReceived}</td>
              <td>{employee.reportedStatus}</td>
              <td>{employee.assignedTechnician}</td>
              <td>{employee.estimatedAmount}</td>
              <td>{employee.deadline}</td>
              <td>{employee.status}</td>
              <td>{employee.note}</td>
              <td>
                <button className="view-button" onClick={() => handleView(employee.id)}>View</button>
                <button className="edit-button" onClick={() => handleEdit(employee.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
