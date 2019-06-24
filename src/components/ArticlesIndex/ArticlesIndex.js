import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import get from 'lodash/get'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { NY_TIMES_QUERY_MAP, NY_TIMES_ID_TO_NAME } from '../../utils/QueryMaps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../utils/Config'
import { ApiCall } from './ApiCall'
import ArticlesPage from './ArticlesPage'

const LoadingText = styled.h2`
  margin: 0;
  margin-left: ${({ theme }) => theme.unit * 5}px;
  ${({ theme }) => theme.mobile`
      margin-left: 0;
      margin-top: ${theme.unit * 2}px;
   `}
`
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  ${({ theme }) => theme.mobile`
      flex-direction: column;
   `}
`
class ArticlesIndex extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const { preferences } = this.props
    Promise.all(preferences.map(id => ApiCall(id)))
      .then(results => {
        this.setState({ data: results })
      })
      .catch(() => {
        throw new Error(`Sorry we can not find results. Please try again soon`)
      })
  }

  render() {
    const { preferences } = this.props
    const { data } = this.state
    if (data.length > 0) {
      return <ArticlesPage data={data} />
    }
    return (
      <Loading>
        {' '}
        <FontAwesomeIcon icon={faSpinner} spin size="3x" color="green" />{' '}
        <LoadingText>We are loading your articles</LoadingText>
      </Loading>
    )
  }
}

export default ArticlesIndex
