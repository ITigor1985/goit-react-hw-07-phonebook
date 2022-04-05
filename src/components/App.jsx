import { Switch, Route } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts';
import { HomePage } from 'pages/Home';
import CreateContact from './CreateContact/CreateContact';
import { GlobalStyle } from '../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';

export const App = () => {
  return (
    <>
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contacts" exact>
            <CreateContact />
            <ContactsPage />
          </Route>
        </Switch>
      </Container>
      <GlobalStyle />
    </>
  );
};
