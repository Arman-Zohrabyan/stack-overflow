/**
 * Author: Arman Zohrabyan
 *
 * Stack overflow table Component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';

class StackOverflowTable extends Component {
  render() {
    const { rows, hasMore, onLoadMore, showDetails } = this.props;

    return(
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            if (hasMore) {
              onLoadMore();
            }
          }}
          hasMore={hasMore}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={true}
        >
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Author</th>
                <th>Title</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                rows.map((row, key) =>
                  <tr key={key} onClick={() => showDetails(row.body, row.link)}>
                    <th scope="row">{key}</th>
                    <td>{row.owner.display_name}</td>
                    <td>{row.title}</td>
                    <td>{moment.unix(row.creation_date).format('MMMM Do YYYY')}</td>
                  </tr>)
              }
            </tbody>
          </Table>
        </InfiniteScroll>
    );
  }
}

StackOverflowTable.propTypes = {
  /**
   *  Table rows data
   */
  rows: PropTypes.array,
  /**
   *  Has more items or not?
   */
  hasMore: PropTypes.bool,
  /**
   *  Load more event handler
   */
  onLoadMore: PropTypes.func,
  /**
   *  Shows information popup
   */
  showDetails: PropTypes.func
};

export default StackOverflowTable;
