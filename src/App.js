import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import FormPanel from './components/FormPanel';

class App extends Component {
  render() {
    return (
      <Container>
        {Object.keys(this.props.rooms).map(roomNumber => (
          <FormPanel
            index={roomNumber}
            roomNumber={roomNumber}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
});

export default connect(mapStateToProps)(App);
