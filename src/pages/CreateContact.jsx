import { Redirect } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCreateContactMutation } from 'redux/contacts/contactSlice';
import { Spinner } from 'components/Spinner/Spinner';

export const CreateContactPage = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    createContact(e.currentTarget.elements.name.value);

    e.currentTarget.reset();

    toast.success('Заметка создана!');
  };

  return (
    <>
      {isSuccess && <Redirect to="/contacts" />}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="phone" />
        <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}
          Create
        </button>
      </form>
    </>
  );
};
