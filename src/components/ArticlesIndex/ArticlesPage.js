import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import NavigateButton from '../NavigateButton/NavigateButton'
import { NAME_TO_ICON } from '../../utils/QueryMaps'
import ArticlesTopic from './ArticleTopic'

const ButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  > div {
    margin: 0;
  }
`

const NavBarLogosWrapper = styled.div`
  display: flex;
  min-height: 230px;
  justify-content: space-evenly;
  flex-direction: column;
  position: fixed;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`

class NavBarLogos extends Component {
  navigateToTitle = title => () => {
    window.location.hash = `${title}`
  }
  render() {
    const { data } = this.props
    return (
      <NavBarLogosWrapper>
        {data.map(topicResults => {
          const { title } = topicResults
          return (
            <FontAwesomeIcon
              key={`${topicResults.title}1`}
              className="icon"
              icon={NAME_TO_ICON[title]}
              size="1x"
              onClick={this.navigateToTitle(title)}
            />
          )
        })}
      </NavBarLogosWrapper>
    )
  }
}

function ArticlesPage({ data }) {
  return (
    <>
      <ButtonWrapper>
        <NavigateButton
          link="/UserPreferencePage/"
          buttonText="Back To Topics"
          buttonSidePadding={3}
          iconComp={<FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />}
        />
      </ButtonWrapper>
      <NavBarLogos data={data} />
      {data.map(topicResults => (
        <ArticlesTopic key={topicResults.title} topicResults={topicResults} />
      ))}
    </>
  )
}

ArticlesPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired
  ).isRequired,
}
export default ArticlesPage
