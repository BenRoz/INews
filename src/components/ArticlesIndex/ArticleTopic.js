import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TopicWrapper = styled.div`
  width: 100%;
  height: 600px;
`

const ArticleWrapper = styled.div`
  background: yellowgreen;
`
const TopicHeader = styled.h1``
const Header = styled.h2``

function ArticlesTopic({ resultTopic }) {
  const { title, articles } = resultTopic
  console.log(title, resultTopic, articles)
  return (
    <TopicWrapper>
      <TopicHeader> {title} </TopicHeader>
      {articles.map(article => {
        return (
          <ArticleWrapper>
            <Header>{article.headline.main}</Header>
          </ArticleWrapper>
        )
      })}
    </TopicWrapper>
  )
}
ArticlesTopic.propTypes = {}
ArticlesTopic.defaultProps = {}
export default ArticlesTopic
