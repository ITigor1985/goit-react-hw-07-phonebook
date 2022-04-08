import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice/contactSlice';
import Button from 'components/Buttons/Button';
import { Formik, Field, Form } from 'formik';
import {
  FormInput,
  InputLabel,
  Title,
  Container,
  ListBtn,
  BtnGoHome,
  BtnGoContact,
} from './NewContactForm.styled';
import { Spinner } from 'components/Spinner/Spinner';
//import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialState = {
  name: '',
  phone: '',
};

const positionToast = () => {
  return { position: toast.POSITION.TOP_CENTER };
};

export const NewContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  console.log(contacts);
  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      toast.warn('is already in contacts', positionToast());
      return;
    }

    createContact({ name, phone });

    resetForm();
    toast.success('Contacts create!', positionToast());
  };

  return (
    <>
      {isLoading && <Spinner />}
      {/* {isSuccess && <Redirect to="/contacts" />} */}
      <Title>Create contact</Title>
      <Container>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Field
              as={FormInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <InputLabel htmlFor="number">Phone number</InputLabel>
            <Field
              as={FormInput}
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <Button type="submit" text="Add contact" />
          </Form>
        </Formik>
      </Container>
      <ListBtn>
        <li>
          <BtnGoHome type="button">
            <Link to="/">Home</Link>
          </BtnGoHome>
        </li>
        <li>
          <BtnGoContact type="button">
            <Link to="/contacts">Contacts</Link>
          </BtnGoContact>
        </li>
      </ListBtn>
      <ToastContainer />
    </>
  );
};