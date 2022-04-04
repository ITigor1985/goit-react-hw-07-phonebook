import { useDeleteContactMutation } from 'redux/contactsSlice/contactSlice';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  console.log(useDeleteContactMutation());
  return (
    <li>
      {name}
      {phone}
      <button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </button>
    </li>
  );
};
