import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
};
