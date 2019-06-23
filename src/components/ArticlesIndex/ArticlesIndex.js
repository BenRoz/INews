import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import get from 'lodash/get'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { NY_TIMES_QUERY_MAP, NY_TIMES_ID_TO_NAME } from '../../utils/QueryMaps'
import ArticlesTopic from './ArticleTopic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../utils/Config'
import ApiCall from './ApiCall'
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
      ApiCall(id).then(results => {
        if (results && results.articles.length > 0) {
          return this.setState(state => {
            return {
              ...state,
              data: [...state.data, results],
            }
          })
        } else {
          throw new Error(
            `Sorry we can not find results. Please try again soon`
          )
        }
      })
    })
  }

  render() {
    const { preferences } = this.props
    const { data } = this.state
    console.log(data, data.length > 0)
    if (data.length > 0) {
      return data.map(resultTopic => {
        console.log('resultTopic', resultTopic)
        return (
          resultTopic && (
            <ArticlesTopic key={resultTopic.title} resultTopic={resultTopic} />
          )
        )
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
          color="green"
        />{' '}
        <LoadingText>We are loading your data</LoadingText>
      </Loading>
    )
  }
}

export default ArticlesIndex
