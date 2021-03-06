import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import preferenceData from '../../utils/preferenceData'
import PreferenceBox from '../PreferenceBox/PreferenceBox'
import NavigateButton from '../NavigateButton/NavigateButton'
import { Paragraph, MainHeader } from '../styles'

const PreferencePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.unit * 8}px;
  animation: fadeIn 0.65s ease-in;
`

const PreferenceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => `${theme.unit * 10}px 0 ${theme.unit * 3}px 0 `};
  justify-content: center;
`

const P_TEXT =
  'Help us to get to know you better. Choose what are your preferred topics'

class UserPreference extends Component {
  state = {
    userPreferences: [],
  }

  onPreferenceBoxClick = boxId => () => {
    this.setState(state => {
      let updatedPreferenceList = ''
      if (state.userPreferences.includes(boxId)) {
        updatedPreferenceList = state.userPreferences.filter(id => id !== boxId)
      } else {
        updatedPreferenceList = [...state.userPreferences, boxId]
      }
      return {
        ...state,
        userPreferences: updatedPreferenceList,
      }
    })
  }
  render() {
    const { userPreferences } = this.state
    const isButtonDisabled = userPreferences.length === 0
    return (
      <PreferencePageWrapper>
        <MainHeader> What interests you? </MainHeader>{' '}
        <Paragraph> {P_TEXT} </Paragraph>{' '}
        <PreferenceWrapper>
          {preferenceData.map(preferenceInfo => (
            <PreferenceBox
              key={preferenceInfo.id}
              preferenceInfo={preferenceInfo}
              onPreferenceClick={this.onPreferenceBoxClick}
              isChosen={userPreferences.includes(preferenceInfo.id)}
            />
          ))}
        </PreferenceWrapper>
        <NavigateButton
          link={'/ArticlesPage/'}
          buttonText={"I'm Done. Let's Read"}
          propsToPage={userPreferences}
          disabled={isButtonDisabled}
        />
      </PreferencePageWrapper>
    )
  }
}
export default UserPreference
