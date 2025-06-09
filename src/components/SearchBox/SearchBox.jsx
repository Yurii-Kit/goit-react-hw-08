import css from './SearchBox.module.css';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { IoMdClose } from 'react-icons/io';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterNameValue = useSelector(selectNameFilter);
  const [inputValue, setInputValue] = useState(filterNameValue);
  const [debouncedFilter] = useDebounce(inputValue, 350);

  const handleFilterChange = (event) => {
    setInputValue(event.target.value);
  };

  // Використовуємо дебаунс для оновлення Redux
  useEffect(() => {
    if (debouncedFilter !== filterNameValue) {
      dispatch(changeFilter(debouncedFilter));
    }
  }, [debouncedFilter, dispatch, filterNameValue]);
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name
        <input
          className={css.inputBox}
          type="text"
          value={inputValue}
          onChange={handleFilterChange}
          placeholder="Search..."
        />
        <IoMdClose
          className={css.icon}
          onClick={() => {
            setInputValue('');
          }}
        />
      </label>
    </div>
  );
}
