import ContactsItem from '../ContactsItem';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/itemsSlice';
import { selectFilter } from 'redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  const filtredContacts = getFiltredContacts();

  return (
    <ul>
      {filtredContacts.map(({ name, number, id }) => (
        <ContactsItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
