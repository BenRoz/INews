import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paragraph, MainHeader } from '../styles'

const TopicWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.unit * 8}px;
  background: ${({ theme }) => theme.defaultBgColor};
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

function ArticlesTopic({ resultTopic }) {
  const { title, articles } = resultTopic
  return (
    <TopicWrapper>
      <MainHeader> {title} </MainHeader>
      {articles.map(article => {
        return (
          <ArticleWrapper key={article.headline.main}>
            <Header>{article.headline.main}</Header>
            <Paragraph>{article.abstract}</Paragraph>
          </ArticleWrapper>
        )
      })}
    </TopicWrapper>
  )
}
ArticlesTopic.propTypes = {
  resultTopic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default ArticlesTopic
