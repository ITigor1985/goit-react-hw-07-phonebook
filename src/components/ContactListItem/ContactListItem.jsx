import { Name, BoxContact } from './ContactListItem.styled';
import { Link } from 'react-router-dom';
export const ContactListItem = ({ id, name, phone }) => {
  return (
    <BoxContact>
      <Link to={`/contacts/${id}`} id={id} name={name} phone={phone}>
        <Name>{name}</Name>
      </Link>
    </BoxContact>
  );
};
