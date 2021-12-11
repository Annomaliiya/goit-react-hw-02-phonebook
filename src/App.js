import { nanoid } from 'nanoid'
import { Component } from 'react/cjs/react.production.min';


import Section from './components/Section';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter"
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  nameInputId = nanoid();
  filterInputId = nanoid();
  numberInputId = nanoid();


  addContact = (event) => {
    event.preventDefault();
    if (this.state.contacts.find((contact) => {
      return contact.name.toLowerCase() === this.state.name.toLowerCase();
    })) {
      alert(this.state.name + " is already in contacts.");
      return;
    }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
      };
      return {
        contacts: [...prevState.contacts, newContact],
      }
    })

    this.setState({ name: "", number: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFiltered = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter);
      return result;
    })

    return filteredContacts;
  }

  render() {
    const { getFiltered } = this;
    const contacts = getFiltered();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} nameInputId={this.nameInputId} name={this.state.name} number={this.state.number} handleChange={this.handleChange} numberInputId={this.nameInputId} />
        </Section>
        <Section title='Contacts'>
          <Filter nameInputId={this.nameInputId} filter={this.state.filter} handleChange={this.handleChange} filterInputId={this.filterInputId} />
          <ContactList contacts={contacts} deleteFunction={this.deleteContact}
          />

        </Section>
      </>
    )
  };
}
export default App;
