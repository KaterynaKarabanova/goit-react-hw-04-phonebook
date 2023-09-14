import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContactForm,
  StyledContactlabel,
  StyledContactInput,
  StyledContactButton,
} from './ContactForm.styled';
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  reset = e => {
    this.setState({ name: '', number: '' });
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };
  render() {
    return (
      <StyledContactForm
        onSubmit={e => {
          this.props.onFormSubmit(e);
          this.reset(e);
        }}
      >
        <StyledContactlabel>
          Name
          <StyledContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => this.onInputChange(e)}
          />
        </StyledContactlabel>
        <StyledContactlabel>
          Number
          <StyledContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => this.onInputChange(e)}
          />
        </StyledContactlabel>
        <StyledContactButton type="submit">Add contact</StyledContactButton>
      </StyledContactForm>
    );
  }
}
ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
  onInputChang: PropTypes.func,
};
