import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.card}>
      <span>{name}: {number}</span>
      <button className={css.button} onClick={onDelete}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
