/**
 * Author: Arman Zohrabyan
 *
 * Stack overflow table container.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoreData, showPopup, closePopup } from '../store/stackOverflow/actions';
import { Col, Row, Container } from 'reactstrap';
import StackOverflowTable from '../components/StackOverflowTable';
import StackOverflowPopup from '../components/StackOverflowPopup';


class StackOverflow extends Component {
  render() {
    const {
      stackOverflow,
      onLoadMore,
      showDetails,
      onClosePopup
    } = this.props;

    return(
      <Fragment>
        <Container>
          <Row>
            <Col>
              <StackOverflowTable
                rows={ stackOverflow.questions }
                hasMore={ stackOverflow.hasMore }
                onLoadMore={ onLoadMore }
                showDetails={ showDetails }
              />
              <StackOverflowPopup
                popup={ stackOverflow.popupDate }
                isOpen={ stackOverflow.popup }
                onClosePopup={ onClosePopup }
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}


StackOverflow.propTypes = {
  /**
   * Stack overflow store object
   */
  stackOverflow: PropTypes.object,
  /**
   *  Load more event handler
   */
  onLoadMore: PropTypes.func,
  /**
   *  Shows information popup
   */
  showDetails: PropTypes.func,
  /**
   *  Closes popup
   */
  onClosePopup: PropTypes.func
};

const mapStateToProps = state => ({
  stackOverflow: state.stackOverflow
});

const mapDispatchToProps = dispatch => ({
  onLoadMore: () => {
    dispatch(getMoreData());
  },
  showDetails: (body, link) => {
    dispatch(showPopup(body, link));
  },
  onClosePopup: () => {
    dispatch(closePopup);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflow);
