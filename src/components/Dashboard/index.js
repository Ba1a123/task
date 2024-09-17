import React, { useState } from 'react';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import View from './View';
import Modal from './Modal';
import Swal from 'sweetalert2';
import './Add.css';

const Dashboard = () => {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees_data')) || []);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleEdit = (id) => {
    const employee = employees.find(emp => emp.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsConfirmingDelete(true);
  };

  const handleView = (id) => {
    const employee = employees.find(emp => emp.id === id);
    setSelectedEmployee(employee);
    setIsViewing(true);
  };

  const confirmDelete = () => {
    setEmployees(employees.filter(emp => emp.id !== deleteId));
    localStorage.setItem('employees_data', JSON.stringify(employees.filter(emp => emp.id !== deleteId)));
    setIsConfirmingDelete(false);
    Swal.fire({
      icon: 'success',
      title: 'Deleted!',
      text: 'Employee has been deleted.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const closeModal = () => {
    setIsAdding(false);
    setIsEditing(false);
    setIsConfirmingDelete(false);
    setIsViewing(false);
  };

  return (
    <div>
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <button onClick={handleAdd} className="button add-button">Add New Job Sheet</button>
</div>
      <Table
        employees={employees}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleView={handleView}
      />
      
      <Modal
        show={isAdding}
        title="Add Job Sheet"
        content={<Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />}
        onClose={closeModal}
      />
      
      <Modal
        show={isEditing}
        title="Edit Job Sheet"
        content={<Edit employees={employees} selectedEmployee={selectedEmployee} setEmployees={setEmployees} setIsEditing={setIsEditing} />}
        onClose={closeModal}
      />
      
      <Modal
        show={isConfirmingDelete}
        title="Confirm Deletion"
        content={<p>Are you sure you want to delete this employee?</p>}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
      
      <Modal
        show={isViewing}
        title="View Job Sheet"
        content={<View employee={selectedEmployee} />}
        onClose={closeModal}
      />
    </div>
  );
};

export default Dashboard;
