//@flow
import React, {Component} from 'react';
import type {Contact} from '../types/Contact';

type Props = {
  contact: Contact;
};

type State = {};

export default class ContactDetails extends Component<Props, State> {
  imgStyle = {
    width: '8em',
    height: '8em',
    background: 'black',
  };
  img = this.props.contact.picture || './images/noUser.png';
  render() {
    return (
      <div>
        <img
          src={this.img}
          style={this.imgStyle}
          alt={this.props.contact.name}
        />
        <h2>{`Name: ${this.props.contact.name}`}</h2>
        <h3>{`Phone: ${this.props.contact.phone}`}</h3>
      </div>
    );
  }
}
