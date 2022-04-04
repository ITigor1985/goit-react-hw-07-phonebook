import { Switch, Route } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts';
import { HomePage } from 'pages/Home';
import { CreateContactPage } from 'pages/CreateContact';

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/contacts" exact>
          <ContactsPage />
          <CreateContactPage />
        </Route>
        {/* <Route path="/contacts/create">
          <CreateContactPage />
        </Route> */}
      </Switch>
    </>
  );
};
