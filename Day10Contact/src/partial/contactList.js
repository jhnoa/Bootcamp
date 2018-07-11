//@flow
import React, {Component} from 'react';
import type {Contact} from '../types/Contact';
type Props = {
  contact: Contact;
  isSelected: boolean;
};

type State = {};

export default class ContactList extends Component<Props, State> {
  tableStyle = {
    padding: 10,
    textAlign: 'center',
    width: '100%',
    background: '#EEEEEE',
    borderColor: '#000000',
    borderTop: '0.5px solid',
  };
  selectedTableStyle = {
    ...this.tableStyle,
    background: '#DEDEDE',
  };
  imageStyle = {
    background: '#000',
    height: '4em',
    width: '4em',
    textAlign: 'center',
  };
  nameStyle = {
    height: '100%',
    paddingLeft: 15,
    textAlign: 'left',
  };
  img = this.props.contact.picture || './images/noUser.png';
  render() {
    return (
      <table
        style={
          this.props.isSelected ? this.selectedTableStyle : this.tableStyle
        }
      >
        <tbody>
          <tr>
            <th style={this.imageStyle}>
              <img
                src={this.img}
                alt={this.props.contact.name}
                style={{width: '100%', height: '100%'}}
              />
            </th>
            <th style={this.nameStyle}>{this.props.contact.name}</th>
          </tr>
        </tbody>
      </table>
    );
  }
  _editContact = (newContact: Contact) => {};
}
