import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormInput, Label, SubmitBtn } from '../App.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInput = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    // console.log(this.props);
    this.props.onSubmit({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Label>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInput}
            value={this.state.name}
          />
        </Label>
        <Label>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInput}
            value={this.state.number}
          />
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}
