import { Link } from 'react-router-dom';
import { useFetchContactsQuery } from '../redux/contactsSlice/contactSlice';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      <Filter />
      <Link to="/contacts/create">Create contact</Link>
      {isFetching && <Spinner />}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};
