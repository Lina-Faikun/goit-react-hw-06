import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
