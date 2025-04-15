import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <span className={css.name}>
        {name}: <span className={css.number}>{number}</span>
      </span>
      <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
