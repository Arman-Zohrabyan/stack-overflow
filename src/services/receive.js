/**
 * Author: Arman Zohrabyan
 *
 * Query handle function.
 */

const axios = require('axios');


/**
 * Sends needed questions.
 *
 * @param  {number}   page Marked page
 * @return {Object}        Requset result
 */
const receiveQuestions = (page = 0) => {
  page = page ? `&page=${page}` : '';
  const url = `https://api.stackexchange.com/2.2/questions?order=desc&filter=withbody&sort=activity&site=stackoverflow${page}`;
  return axios.get(url + page);
}

export {
    receiveQuestions
};
