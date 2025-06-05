import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap() // додаткові повідомлення про успіх або помилку
      .then(() => alert('Succes'))
      .catch(() => alert('Error fetching contacts'));
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;
