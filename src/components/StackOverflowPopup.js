/**
 * Author: Arman Zohrabyan
 *
 * Stack overflow Popup Component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class StackOverflowPopup extends Component {
  render() {
    const { popup, isOpen, onClosePopup } = this.props;

    return(
      <Modal isOpen={isOpen} toggle={onClosePopup}>
        <ModalHeader toggle={onClosePopup}>
          Question detail
        </ModalHeader>
        
        <ModalBody>
          Link: <a href={popup.link} onClick={onClosePopup}>{popup.link}</a>
          <br/>
          <br/>
          <br/>
          <div dangerouslySetInnerHTML={{__html: popup.body}}/>
        </ModalBody>
        
        <ModalFooter>
          <Button color="secondary" onClick={onClosePopup}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

StackOverflowPopup.propTypes = {
  /**
   *  Closes popup
   */
  onClosePopup: PropTypes.func,
  /**
   *  Is opened popup?
   */
  isOpen: PropTypes.bool,
  /**
   *  Popup inner data
   */
  popup: PropTypes.object
};

export default StackOverflowPopup;
