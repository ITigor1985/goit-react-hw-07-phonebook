import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice/fiterSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <div>
        <input name="filter" type="text" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Filter;
