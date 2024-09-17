import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Add.css';

const Edit = ({ employees, setEmployees, setIsEditing, selectedEmployee }) => {
  const [clientName, setClientName] = useState(selectedEmployee.clientName);
  const [contactInfo, setContactInfo] = useState(selectedEmployee.contactInfo);
  const [receivedDate, setReceivedDate] = useState(selectedEmployee.receivedDate);
  const [inventoryReceived, setInventoryReceived] = useState(selectedEmployee.inventoryReceived);
  const [reportedStatus, setReportedStatus] = useState(selectedEmployee.reportedStatus);
  // const [clientNotes, setClientNotes] = useState(selectedEmployee.clientNotes);
  const [assignedTechnician, setAssignedTechnician] = useState(selectedEmployee.assignedTechnician);
  const [estimatedAmount, setEstimatedAmount] = useState(selectedEmployee.estimatedAmount);
  const [deadline, setDeadline] = useState(selectedEmployee.deadline);
  const [status, setStatus] = useState(selectedEmployee.status);
  const [note, setNote] = useState(selectedEmployee.note);

  const handleEdit = (e) => {
    e.preventDefault();

    if (!clientName || !contactInfo || !receivedDate || !inventoryReceived || !reportedStatus || !assignedTechnician || !estimatedAmount || !deadline || !status || !note) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const updatedEmployee = {
      id: selectedEmployee.id,
      clientName,
      contactInfo,
      receivedDate,
      inventoryReceived,
      inventoryDocument: selectedEmployee.inventoryDocument, // Keep the original document
      reportedStatus,
      assignedTechnician,
      estimatedAmount,
      deadline,
      status,
      note,
    };

    const updatedEmployees = employees.map(emp => emp.id === selectedEmployee.id ? updatedEmployee : emp);
    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `Client ${clientName}'s job sheet has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleEdit}>
        <h1>Edit Job Sheet</h1>
        <label htmlFor="clientName">Client Name</label>
        <input
          id="clientName"
          type="text"
          name="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <label htmlFor="contactInfo">Contact Info</label>
        <input
          id="contactInfo"
          type="text"
          name="contactInfo"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
        <label htmlFor="receivedDate">Received Date</label>
        <input
          id="receivedDate"
          type="date"
          name="receivedDate"
          value={receivedDate}
          onChange={(e) => setReceivedDate(e.target.value)}
        />
        <label htmlFor="inventoryReceived">Inventory Received</label>
        <input
          id="inventoryReceived"
          type="text"
          name="inventoryReceived"
          value={inventoryReceived}
          onChange={(e) => setInventoryReceived(e.target.value)}
        />
        <label htmlFor="reportedStatus">Reported Status</label>
        <input
          id="reportedStatus"
          type="text"
          name="reportedStatus"
          value={reportedStatus}
          onChange={(e) => setReportedStatus(e.target.value)}
        />
        <label htmlFor="assignedTechnician">Assigned Technician</label>
        <input
          id="assignedTechnician"
          type="text"
          name="assignedTechnician"
          value={assignedTechnician}
          onChange={(e) => setAssignedTechnician(e.target.value)}
        />
        <label htmlFor="estimatedAmount">Estimated Amount ($)</label>
        <input
          id="estimatedAmount"
          type="number"
          name="estimatedAmount"
          value={estimatedAmount}
          onChange={(e) => setEstimatedAmount(e.target.value)}
        />
        <label htmlFor="deadline">Deadline</label>
        <input
          id="deadline"
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <label htmlFor="note">Add or Update Note</label>
        <textarea
          id="note"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Save Changes" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
