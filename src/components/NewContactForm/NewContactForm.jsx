import { toast } from 'react-hot-toast';
import { Redirect } from 'react-router-dom';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactSlice';
import Button from 'components/Buttons/Button';
import { Formik, Field, Form } from 'formik';
import { FormInput, InputLabel } from './NewContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

export const NewContactForm = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      toast.warn(`${name} is already in contacts`);
      return;
    }

    createContact({ name, phone });
    toast.success('Contacts create!');
    resetForm();
  };

  //   const handleSubmit = async e => {
  //     e.preventDefault();

  //     createContact(e.currentTarget.elements.name.value);

  //     e.currentTarget.reset();

  //     toast.success('Заметка создана!');
  //   };
  return (
    <>
      {isSuccess && <Redirect to="/contacts" />}
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

          {/* <button type="submit">Add contact</button> */}
        </Form>
      </Formik>
    </>
  );
};
