// components/Modal.js
import React from 'react';
import './Add.css';

const Modal = ({ show, title, content, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">
          {content}
        </div>
        <div className="modal-footer">
          {onConfirm && (
            <button className="button confirm-button" onClick={onConfirm}>
              Confirm
            </button>
          )}
          <button className="button cancel-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
