import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import clsx from 'clsx';
import css from './Contact.module.css';

// export default function Contact({ listItem: { id, name, number } }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     setIsModalOpen(true);
//   };

//   const confirmDelete = () => {
//     console.log(`Deleting contact with id: ${id}`);

//     dispatch(deleteContact(id));
//   };
//   return (
//     <>
//       <div className={css.contactWrapper}>
//         <p>
//           <FaUser />
//           <span className={css.text}>{name}</span>
//         </p>

//         <p>
//           <BsFillTelephoneFill />
//           <span className={css.text}>{number}</span>
//         </p>
//       </div>
//       <div className={css.buttonsWrapper}>
//         <button type="button" className={clsx(css.button, css.editButton)}>
//           Edit
//         </button>
//         <button
//           type="button"
//           onClick={handleDelete}
//           className={clsx(css.button, css.deleteButton)}
//         >
//           Delete
//         </button>
//       </div>
//       {isModalOpen && (
//         <Modal
//           onClose={() => setIsModalOpen(false)}
//           onConfirm={confirmDelete}
//         />
//       )}
//     </>
//   );
// }

export default function Contact({ listItem }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [editingContact, setEditingContact] = useState(null);

  const openModal = (action) => {
    setModalAction(action);
    setEditingContact(listItem);
    setIsModalOpen(true);
  };

  const handleConfirm = (data) => {
    if (modalAction === 'edit') {
      dispatch(updateContact(data));
    } else {
      dispatch(deleteContact(data));
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={css.contactWrapper}>
        <p>
          <FaUser /> <span className={css.text}>{listItem.name}</span>
        </p>
        <p>
          <BsFillTelephoneFill />{' '}
          <span className={css.text}>{listItem.number}</span>
        </p>
      </div>
      <div className={css.buttonsWrapper}>
        <button
          type="button"
          className={clsx(css.button, css.editButton)}
          onClick={() => openModal('edit')}
        >
          Edit
        </button>
        <button
          type="button"
          className={clsx(css.button, css.deleteButton)}
          onClick={() => openModal('delete')}
        >
          Delete
        </button>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
          contact={editingContact}
          action={modalAction}
        />
      )}
    </>
  );
}
