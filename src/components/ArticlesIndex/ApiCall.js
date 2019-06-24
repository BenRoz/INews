import axios from 'axios'
import get from 'lodash/get'
import { NY_TIMES_QUERY_MAP, NY_TIMES_ID_TO_NAME } from '../../utils/QueryMaps'
import config from '../../utils/Config'

function ApiCall(id) {
  return axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${config.NY_TIMES_API_KEY}&fq=news_desk:("${NY_TIMES_QUERY_MAP[id]}")`
    )
    .then(res => {
      return {
        articles: get(res, 'data.response.docs'),
        title: NY_TIMES_ID_TO_NAME[id],
      }
    })
    .catch(error => {
      throw new Error(
        `Sorry we can not find results. Please try again soon`,
        error
      )
    })
}

function prepareDataForSingleApiCall(preferenceIds) {
  if (Array.isArray(preferenceIds) && preferenceIds.length > 0) {
    return preferenceIds.reduce((acc, id, index) => {
      if (index === preferenceIds.length - 1) {
        return `${acc} "${NY_TIMES_ID_TO_NAME[id]}" )`
      }
      return `${acc} "${NY_TIMES_ID_TO_NAME[id]}",`
    }, '(')
  }
  return null
}

export { ApiCall, prepareDataForSingleApiCall }
