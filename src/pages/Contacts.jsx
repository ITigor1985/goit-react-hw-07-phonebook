import { Link } from 'react-router-dom';
import { useFetchContactsQuery } from '../redux/contacts/contactSlice';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      <Link to="/contacts/create">Create contact</Link>
      {isFetching && <Spinner />}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};
