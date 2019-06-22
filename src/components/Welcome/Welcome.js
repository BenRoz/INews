import React from 'react'
import styled from 'styled-components'
import welcomeImage from '../../images/bg-welcome.png'
import NavigateButton from '../NavigateButton/NavigateButton'
import { Paragraph, MainHeader } from '../styles'

const WelcomeImageDiv = styled.img`
  margin: 0;
  padding: 60px 0 0;
  object-fit: scale-down;
  max-height: 400px;
`

const WelcomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.defaultBgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 50px;
  animation: fadeIn 0.65s ease-in;
`

const P_TEXT =
  'INews is a magazine that finds the most relevant and interesting content tailored to your flavor.'

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <MainHeader> Welcome to your new favorite news magazine </MainHeader>{' '}
      <Paragraph> {P_TEXT} </Paragraph>{' '}
      <NavigateButton link="/UserPreferencePage/" buttonText="Come on in" />
      <WelcomeImageDiv src={welcomeImage} />{' '}
    </WelcomeWrapper>
  )
}

export default Welcome
