import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import get from 'lodash/get'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { NY_TIMES_QUERY_MAP, NY_TIMES_ID_TO_NAME } from '../../utils/QueryMaps'
import ArticlesTopic from './ArticleTopic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoadingText = styled.h2`
  margin: 0;
  margin-left: ${({ theme }) => theme.unit * 5}px;
`
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
class ArticlesIndex extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const { preferences } = this.props
    preferences.map(id => {
      console.log(NY_TIMES_QUERY_MAP[id])
      axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Cb8mvIlF6sMQFLh0QQmhApBq4y9NQJUT&fq=news_desk:(${NY_TIMES_QUERY_MAP[id]})`
        )
        .then(response => {
          const results = get(response, 'data.response.docs')
          if (results && results.length > 0) {
            this.setState(state => {
              return {
                ...state,
                data: [
                  ...state.data,
                  {
                    articles: results,
                    title: NY_TIMES_ID_TO_NAME[id],
                  },
                ],
              }
            })
          } else {
          }
        })
        .catch(error => {
          throw new Error(
            `Sorry we can not find results. Please try again soon`
          )
          console.info(error)
        })
    })
  }

  render() {
    const { preferences } = this.props
    const { data } = this.state
    if (data.length > 0) {
      data.map(resultTopic => {
        return resultTopic ? (
          <ArticlesTopic key={resultTopic.title} resultTopic={resultTopic} />
        ) : null
      })
    }
    return (
      <Loading>
        {' '}
        <FontAwesomeIcon
          className="icon"
          icon={faSpinner}
          spin
          size="3x"
        />{' '}
        <LoadingText>We are loading your data</LoadingText>
      </Loading>
    )
  }
}

export default ArticlesIndex
