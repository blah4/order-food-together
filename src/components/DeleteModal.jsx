import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import db from '../firebase/config';

import { ContextConsumer } from '../context';

class DeleteEvent extends Component {

    state = {
        show: false
    }

    handleClose = () => {
        this.setState({ show: false, name: '' });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleDelete = (e, joinID, test) => {
      this.setState({ show: false });
      db.collection('events').doc(joinID).delete();
      this.props.deleteEvent(joinID);
    }

    render() {
        return (
          <ContextConsumer>
          {(context) => (
            <>
            <Button variant="secondary" onClick={this.handleShow}>
              Delete
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Do You realy want to Delete Event?
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={(e) => this.handleDelete(e, this.props.joinID, context.changeState)}>
                    Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </>
          )}
          </ContextConsumer>
        )
    }
}

export default DeleteEvent; 