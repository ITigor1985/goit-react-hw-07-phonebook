import propTypes from 'prop-types';
import { Contact, ContactWrapper } from './ContactsItem.styled';
import { remove } from '../../redux/itemsSlice';
import { useDispatch } from 'react-redux';
import Button from 'components/Buttons/Button';
const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      <ContactWrapper>
        <span>{name}:</span>
        <span>{number} </span>
      </ContactWrapper>
      <Button
        type="button"
        text="Delete"
        onClick={() => dispatch(remove(id))}
      />
    </Contact>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
