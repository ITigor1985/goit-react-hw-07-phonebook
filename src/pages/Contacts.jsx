import { useFetchContactsQuery } from '../redux/contactsSlice/contactSlice';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const totalContacts = () => {
    return `Total contacts: ${contacts.length}`;
  };

  return (
    <div>
      <Filter />
      <h1>Create contact</h1>
      {isFetching && <Spinner />}
      {totalContacts()}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};
