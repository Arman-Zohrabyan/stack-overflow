/**
 * Author: Arman Zohrabyan
 *
 * Query handle function.
 */

const axios = require('axios');
const API_ENDPOINT = 'https://api.stackexchange.com/2.2';


/**
 * Sends needed questions.
 *
 * @param  {number}   page Marked page
 * @return {Object}        Requset result
 */
const receiveQuestions = (page = 0) => {
  page = page ? `&page=${page}` : '';
  const url = `${API_ENDPOINT}/questions?order=desc&filter=withbody&sort=activity&site=stackoverflow${page}`;
  return axios.get(url + page);
}

export {
    receiveQuestions
};
