// @flow
import React, {Component} from 'react';
import type {Contact} from './types/Contact';
import ContactList from './partial/contactList';
import ContactDetails from './partial/contactDetails';

type Props = {
  accountName: string;
};
type State = {
  contacts: Array<Contact>;
  selectedContact: number;
  detailContact: number;
};

class App extends Component<Props, State> {
  state = {
    contacts: [
      {
        id: 0,
        name: 'johan',
        phone: '+62816174353000',
      },
      {
        id: 1,
        name: 'dian',
        phone: '+62816174353000',
      },
      {
        id: 2,
        name: 'trup',
        phone: '+62816174353000',
      },
      {
        id: 3,
        name: 'ester',
        phone: '+62816174353000',
      },
      {
        id: 4,
        name: 'arie',
        phone: '+62816174353000',
      },
      {
        id: 5,
        name: 'deandra',
        phone: '+62816174353000',
      },
      {
        id: 6,
        name: 'david',
        phone: '+62816174353000',
      },
      {
        id: 7,
        name: 'astrid',
        phone: '+62816174353000',
      },
      {
        id: 8,
        name: 'aji',
        phone: '+62816174353000',
      },
    ],
    selectedContact: 0,
    detailContact: -1,
  };
  tableStyle = {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    margin: 0,
    padding: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'top',
  };
  myNameStyle = {
    padding: 10,
    height: '80px',
    background: '#3EE3FF',
  };
  listStyle = {
    height: '100%',
    overflow: 'auto',
  };
  detailStyle = {width: '70%'};

  // TODO: Make Style for My Account, Contact List, and Contact Details

  indexChecker = (number: number) => {
    let min = 0;
    let max = this.state.contacts.length - 1;
    let result = number > max ? max : number < min ? min : number;
    return result;
  };

  keyDownListener = (event: KeyboardEvent) => {
    let {selectedContact} = this.state;
    let index = selectedContact;
    if (event.key === 'ArrowUp') {
      index = index - 1;
    } else if (event.key === 'ArrowDown') {
      index = index + 1;
    } else if (event.key === 'Enter') {
      this.setState({detailContact: index, selectedContact: index});
    }
    index = this.indexChecker(index);
    this.setState({selectedContact: index});
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownListener);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownListener);
  }

  render() {
    return (
      <table style={this.tableStyle}>
        <tbody>
          <tr>
            <th style={this.myNameStyle}>{this._myContactView()}</th>
            <th style={this.detailStyle} rowSpan="2">
              {this.state.detailContact !== -1 ? (
                <ContactDetails
                  contact={this.state.contacts[this.state.detailContact]}
                />
              ) : null}
            </th>
          </tr>
          <tr>
            <td>
              <div style={this.listStyle}>
                {this.state.contacts.map((val) => {
                  return (
                    <ContactList
                      key={val.id}
                      contact={val}
                      isSelected={val.id === this.state.selectedContact}
                    />
                  );
                })}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  _myContactView = () => {
    let imageStyle = {
      background: '#000',
      height: '4em',
      width: '4em',
    };
    let nameStyle = {
      height: '100%',
      paddingLeft: 15,
      textAlign: 'left',
    };
    return (
      <table>
        <tbody>
          <tr>
            <th style={imageStyle}>
              <div />
            </th>
            <th style={nameStyle}>{this.props.accountName}</th>
          </tr>
        </tbody>
      </table>
    );
  };
}

export default App;
