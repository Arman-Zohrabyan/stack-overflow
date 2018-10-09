/**
 * Author: Arman Zohrabyan
 *
 * Stack overflow reducer.
 */

const initialState = {
  questions: [],
  hasMore: true,
  page: 0,
  popup: false,
  popupDate: {
    body: '',
    link: ''
  }
};

const stackOverflow = (state = initialState, action) => {
  switch (action.type) {

    case 'STACK_OVERFLOW_RECEIVE_QUESTIONS': {
      return {
        ...state,
        questions: action.questions,
        hasMore: action.hasMore,
        page: action.page
      };
    }

    case 'STACK_OVERFLOW_SHOW_DETAILS': {
      return {
        ...state,
        popup: true,
        popupDate: {
          body: action.body,
          link: action.link
        }
      };
    }

    case 'STACK_OVERFLOW_CLOSE_POPUP': {
      return {
        ...state,
        popup: false
      };
    }

    default:
      return state;
  }
};

export default stackOverflow;
