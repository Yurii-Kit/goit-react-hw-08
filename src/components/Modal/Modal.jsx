import { useState, useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ onClose, onConfirm, contact, action }) {
  const [editedName, setEditedName] = useState(contact?.name || '');
  const [editedNumber, setEditedNumber] = useState(contact?.number || '');

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSubmit = () => {
    onConfirm(
      action === 'edit'
        ? { id: contact.id, name: editedName, number: editedNumber }
        : contact.id,
    );
    onClose();
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        {action === 'edit' ? (
          <>
            <h2>Edit contact</h2>
            <label>
              Name:
              <input
                className={css.input}
                type="text"
                value={editedName}
                onChange={(event) => setEditedName(event.target.value)}
              />
            </label>
            <label>
              Number:
              <input
                className={css.input}
                type="text"
                value={editedNumber}
                onChange={(event) => setEditedNumber(event.target.value)}
              />
            </label>
          </>
        ) : (
          <>
            <h2>Delete contact</h2>
            <p> Are you sure you want to delete the contact? </p>
          </>
        )}
        <div className={css.buttonContainer}>
          <button className={css.confirmButton} onClick={handleSubmit}>
            {action === 'edit' ? 'Save' : 'Delete'}
          </button>
          <button className={css.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
