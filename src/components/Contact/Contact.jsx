import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ listItem: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(`Deleting contact with id: ${id}`);

    dispatch(deleteContact(id));
  };
  return (
    <>
      <div>
        <p>
          <FaUser />
          <span className={css.text}>{name}</span>
        </p>

        <p>
          <BsFillTelephoneFill />
          <span className={css.text}>{number}</span>
        </p>
      </div>
      <button type="button" onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </>
  );
}
