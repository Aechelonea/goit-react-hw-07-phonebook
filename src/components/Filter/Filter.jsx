import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
        placeholder="Filter contacts..."
      />
    </div>
  );
}

export default Filter;
