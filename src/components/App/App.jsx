import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { AppBar } from '../AppBar/AppBar';

import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
    // .unwrap() // додаткові повідомлення про успіх або помилку
    // .then(() => alert('Succes'))
    // .catch(() => alert('Error fetching contacts'));
  }, [dispatch]);
  return (
    <>
      <div className={css.container}>
        <AppBar />
        {/* <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length !== 0 && <ContactList />} */}
      </div>
    </>
  );
}

export default App;
