import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice/contactSlice';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Contact = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  let { id } = useParams();

  const getContact = contacts.find(contact => contact.id === id);

  return (
    <>
      <ul>
        <li>{getContact.name}</li>
        <li>{getContact.phone}</li>
      </ul>
      <button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Redirect to="/contacts" />}
        Delete
      </button>
    </>
  );
};
export default Contact;
