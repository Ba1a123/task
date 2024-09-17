import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ setIsAdding, employees, setEmployees }) => {
  const [clientName, setClientName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [receivedDate, setReceivedDate] = useState('');
  const [inventoryReceived, setInventoryReceived] = useState('');
  const [inventoryDocument, setInventoryDocument] = useState(''); 
  const [reportedStatus, setReportedStatus] = useState('');
  const [assignedTechnician, setAssignedTechnician] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const [note, setNote] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setInventoryDocument(reader.result); 
    };

    if (file) {
      reader.readAsDataURL(file); 
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!clientName || !contactInfo || !receivedDate || !inventoryReceived || !inventoryDocument || !reportedStatus || !assignedTechnician || !estimatedAmount || !deadline || !status || !note) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      id: Date.now(), // Unique ID for demonstration
      clientName,
      contactInfo,
      receivedDate,
      inventoryReceived,
      inventoryDocument, // Base64 string
      reportedStatus,
      assignedTechnician,
      estimatedAmount,
      deadline,
      status,
      note,
    };

    const updatedEmployees = [...employees, newEmployee];
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees); // Update state with new data

    setIsAdding(false);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `Client ${clientName}'s job sheet has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="add-container">
      <form onSubmit={handleAdd}>
        <label>
          Client Name:
          <input type="text" placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </label>

        <label>
          Contact Info:
          <input type="text" placeholder="Contact Info" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </label>

        <label>
          Received Date:
          <input type="date" placeholder="Received Date" value={receivedDate} onChange={(e) => setReceivedDate(e.target.value)} />
        </label>

        <label>
          Inventory Received:
          <input type="text" placeholder="Inventory Received" value={inventoryReceived} onChange={(e) => setInventoryReceived(e.target.value)} />
        </label>

        <label>
          Inventory Document (PDF):
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
        </label>

        <label>
          Reported Status:
          <input type="text" placeholder="Reported Status" value={reportedStatus} onChange={(e) => setReportedStatus(e.target.value)} />
        </label>

        <label>
          Assigned Technician:
          <input type="text" placeholder="Assigned Technician" value={assignedTechnician} onChange={(e) => setAssignedTechnician(e.target.value)} />
        </label>

        <label>
          Estimated Amount:
          <input type="number" placeholder="Estimated Amount" value={estimatedAmount} onChange={(e) => setEstimatedAmount(e.target.value)} />
        </label>

        <label>
          Deadline:
          <input type="date" placeholder="Deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </label>

        <label>
          Status:
          <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>

        <label>
          Note:
          <textarea placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
