import { useDeleteContactMutation } from 'redux/contactsSlice/contactSlice';
import { Spinner } from 'components/Spinner/Spinner';
import { Name, Phone, BoxContact } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <BoxContact>
      <Name>{name}</Name>
      <Phone>{phone}</Phone>
      <button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </button>
    </BoxContact>
  );
};
