/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Paragraph, MainHeader } from '../styles'

const TopicWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.unit * 8}px;
  ${({ theme }) => theme.mobile`
      padding-top: ${theme.unit * 14}px;
   `}
`

const ArticleWrapper = styled.div`
  background: white;
  margin: ${({ theme }) => theme.unit * 6}px auto;
  text-align: center
  max-width: 600px;
  padding: ${({ theme }) => theme.unit * 2}px;
  cursor: pointer;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  :hover {
    box-shadow: 2px 4px 8px 3px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease-in-out;
  }
`

const Header = styled.h3``

const onArticleClick = url => () => {
  const newWin = window.open(url, '_blank')
  newWin.focus()
}

function ArticlesTopic({ topicResults }) {
  const { title, articles } = topicResults
  const isTopicArticleExist = articles.length > 0
  return (
    <>
      {isTopicArticleExist && (
        <TopicWrapper>
          <a name={`${title}`}>
            <MainHeader> {title} </MainHeader>
          </a>
          {articles.map(article => {
            return (
              <ArticleWrapper
                key={article.headline.main}
                onClick={onArticleClick(article.web_url)}
              >
                <Header>{article.headline.main}</Header>
                <Paragraph>{article.abstract}</Paragraph>
              </ArticleWrapper>
            )
          })}
        </TopicWrapper>
      )}
    </>
  )
}
ArticlesTopic.propTypes = {
  topicResults: PropTypes.shape({
    title: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default ArticlesTopic
