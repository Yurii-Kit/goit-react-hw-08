import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const listItems = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {listItems.map((listItem) => {
        return (
          <li className={css.listItem} key={listItem.id}>
            <Contact listItem={listItem} />
          </li>
        );
      })}
    </ul>
  );
}
