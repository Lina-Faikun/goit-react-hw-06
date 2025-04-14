import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="🔎 find a contact..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
