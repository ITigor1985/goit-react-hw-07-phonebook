import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectFilter } from 'redux/filterSlice/fiterSlice';
import { useSelector } from 'react-redux';

export const ContactList = ({ contacts }) => {
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
      {filtredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};
