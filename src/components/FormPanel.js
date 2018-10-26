import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormBox, FormField, FormTitle, CheckBox } from '../styles';
import { selectRoom, deselectRoom } from '../actions';

class FormPanel extends Component {
  state = {
    isSelected: false,
  }

  componentDidMount() {
    const { selectedRooms, roomNumber } = this.props;
    const isSelected = selectedRooms[roomNumber];
    this.setState({
      isSelected,
    })
  }

  select() {
    this.state.isSelected
      ? this.props.deselectRoom(this.props.roomNumber)
      : this.props.selectRoom(this.props.roomNumber);
  }

  render() {
    return (
      <FormBox>
        <FormTitle>
          <CheckBox onClick={() => this.toggleSelect()}/>
            <h4>Room {this.props.roomNumber}</h4>
        </FormTitle>
        <FormField>
          <p>Adults (18+)</p>
        </FormField>
      </FormBox>
    );
  }
}

const mapStateToProps = state => ({
  selectedRooms: state.selectedRooms
});

export default connect(mapStateToProps, { selectRoom, deselectRoom })(FormPanel);