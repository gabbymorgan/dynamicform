import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from './styles';
import FormPanel from './components/FormPanel';
import { loadState, saveState } from './actions';

class App extends Component {
  submitHandler() {
    this.props.saveState(this.props.store);
  }

  componentDidMount() {
    this.props.loadState();
  }

  render() {
    return (
      <Container>
        <Row>
          {Object.keys(this.props.rooms).map((roomNumber, index, array) => (
            <FormPanel
              key={roomNumber}
              currentRoom={this.props.rooms[roomNumber]}
              currentRoomNumber={roomNumber}
              roomNumbers={array}
            />
          ))}
        </Row>
        <Row>
          <button onClick={() => this.submitHandler()}>Submit</button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  store: state,
});

export default connect(mapStateToProps, { loadState, saveState })(App);
