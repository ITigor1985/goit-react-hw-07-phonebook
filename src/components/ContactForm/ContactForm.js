import { FormInput, InputLabel } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { add, selectItems } from '../../redux/itemsSlice';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import Button from 'components/Buttons/Button';

const initialState = {
  name: '',
  number: '',
};

function ContactForm() {
  const contacts = useSelector(selectItems);

  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contactObj = { id: nanoid(6), name, number };
    dispatch(add(contactObj));

    resetForm();
  };

  return (
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
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit" text="Add contact" />

        {/* <button type="submit">Add contact</button> */}
      </Form>
    </Formik>
  );
}

export default ContactForm;
