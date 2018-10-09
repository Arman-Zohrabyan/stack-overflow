/**
 * Author: Arman Zohrabyan
 *
 * Stack overflow actions.
 */

import { receiveQuestions } from '../../services/receive';

/**
 * Gets inital data.
 */
export const getMoreData = () => (dispatch, getState) => {
  const { stackOverflow } = getState();
  const { page, questions } = stackOverflow;
  receiveQuestions(page).then(res => {
    const newQuestions = res.data.items;
    const hasMore = res.data.has_more;

    dispatch({
      type: 'STACK_OVERFLOW_RECEIVE_QUESTIONS',
      page: page + 1,
      questions: [...questions, ...newQuestions],
      hasMore
    });
  });
};

/**
 * Shows detaile popup.
 *
 * @param  {string} body Popup body
 * @param  {string} link Link to question page
 * @return {Object}      Dispatch function
 */
export const showPopup = (body, link) => ({
  type: 'STACK_OVERFLOW_SHOW_DETAILS',
  body,
  link
});

/**
 * Closes popup.
 */
export const closePopup = {
  type: 'STACK_OVERFLOW_CLOSE_POPUP',
}
