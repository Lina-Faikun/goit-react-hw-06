import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="🔎 find a contact..."
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
