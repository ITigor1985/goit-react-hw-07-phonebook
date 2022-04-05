import { useFetchContactsQuery } from '../redux/contactsSlice/contactSlice';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const totalContacts = () => {
    if (contacts) {
      return `Total contacts: ${contacts.length}`;
    } else return;
  };

  return (
    <div>
      <Filter />
      <h1>Contacts</h1>
      {isFetching && <Spinner />}
      {totalContacts()}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};
