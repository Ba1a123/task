import React, { useRef } from 'react';
import './Add.css';
import html2pdf from 'html2pdf.js';

const View = ({ employee }) => {
  const viewRef = useRef();

  if (!employee) return null;

  const handleSaveAsPDF = () => {
    const element = viewRef.current;
    html2pdf().from(element).save();
  };

  return (
    <div className="view-container">
      <div ref={viewRef}>
        <p><strong>Client Name:</strong> {employee.clientName}</p>
        <p><strong>Contact Info:</strong> {employee.contactInfo}</p>
        <p><strong>Received Date:</strong> {employee.receivedDate}</p>
        <p><strong>Inventory Received:</strong> {employee.inventoryReceived}</p>
        <p><strong>Inventory Document:</strong> <a href={employee.inventoryDocument} target="_blank" rel="noopener noreferrer">Open Document</a></p>
        <p><strong>Reported Status:</strong> {employee.reportedStatus}</p>
        <p><strong>Client Notes:</strong> {employee.clientNotes}</p>
        <p><strong>Assigned Technician:</strong> {employee.assignedTechnician}</p>
        <p><strong>Estimated Amount:</strong> ${employee.estimatedAmount}</p>
        <p><strong>Deadline:</strong> {employee.deadline}</p>
        <p><strong>Status:</strong> {employee.status}</p>
        <p><strong>Note:</strong> {employee.note}</p>
      </div>

      <button className="pdf-button" onClick={handleSaveAsPDF}>Save as PDF</button>
    </div>
  );
};

export default View;
