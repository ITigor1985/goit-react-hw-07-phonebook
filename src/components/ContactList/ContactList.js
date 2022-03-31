import { getContacts } from '../../redux/contactsApi';
import ContactsItem from 'components/ContactsItem';

const ContactList = () => {
  const { data, error, isLoading } = getContacts('');

  return (
    <ul>
      {data.map(({ name, phone, id }) => (
        <ContactsItem key={id} name={name} id={id} number={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
