import { useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ onClose, onConfirm }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <p> Are you sure you want to delete the contact? </p>
        <div className={css.buttonContainer}>
          <button className={css.confirmButton} onClick={onConfirm}>
            Yes, delete
          </button>
          <button className={css.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
