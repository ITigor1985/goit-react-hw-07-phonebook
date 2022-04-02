import { Redirect } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCreateContactMutation } from 'redux/contacts/contactSlice';
import { Spinner } from 'components/Spinner/Spinner';

export const CreateContactPage = () => {
  const [createTodo, { isLoading, isSuccess }] = useCreateContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    createTodo(e.currentTarget.elements.content.value);
    e.currentTarget.reset();

    toast.success('Заметка создана!');
  };

  return (
    <>
      {isSuccess && <Redirect to="/contacts" />}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="content" />
        <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}
          Create
        </button>
      </form>
    </>
  );
};
