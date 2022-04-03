import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};
