import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';

import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';



function App(){
 
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm  />
        </Section>
        <Section title="Contacts">
              <Filter />
              <ContactList />
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
