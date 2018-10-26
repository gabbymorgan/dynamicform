import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormBox, FormField, FormTitle, CheckBox } from '../styles';
import { selectRoom, deselectRoom, updateOccupants } from '../actions';

class FormPanel extends Component {
  toggleSelect() {
    const { currentRoom, roomNumbers, currentRoomNumber } = this.props;
    const { selected } = currentRoom;
    if (selected) {
      roomNumbers.forEach(roomNumber => {
        if (roomNumber >= parseInt(currentRoomNumber)) {
          this.props.deselectRoom(roomNumber);
        }
      });
    }
    else {
      roomNumbers.forEach(roomNumber => {
        if (roomNumber <= parseInt(currentRoomNumber)) {
          this.props.selectRoom(roomNumber);
        }
      });
    }
  }

  updateSelection(event) {
    const { updateOccupants, currentRoomNumber } = this.props;
    const { name, value } = event.target;
    updateOccupants(currentRoomNumber, name, value);
  }

  render() {
    const {
      selected,
      adults,
      children,
    } = this.props.currentRoom
    return (
      <FormBox selected={selected} >
        <FormTitle selected={selected}>
          <CheckBox
            type='checkbox'
            checked={selected}
            onChange={() => this.toggleSelect()}
            hide={this.props.currentRoomNumber === '1'}
          />
          <h4>Room {this.props.currentRoomNumber}</h4>
        </FormTitle>
        <FormField>
          <p>Adults (18+)</p>
          <select
            name="adults"
            onChange={this.updateSelection.bind(this)}
            disabled={!selected}
            value={adults}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </FormField>
        <FormField>
          <p>Children (0-17)</p>
          <select
            name="children"
            onChange={this.updateSelection.bind(this)}
            disabled={!selected}
            value={children}
          >
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>

          </select>
        </FormField>
      </FormBox>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

export default connect(mapStateToProps, { selectRoom, deselectRoom, updateOccupants })(FormPanel);