import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const NavigateButtonWrapper = styled.div`
  height: 50px;
  border-radius: 32px;
  margin: 40px auto 0;
  min-width: 260px;
  > a {
    text-decoration: none;
    color: inherit;
  }
`
const Button = styled.button`
  border: none;
  line-height: 50px;
  border-radius: 32px;
  background-color: #9218fd;
  padding: 0 ${({ theme }) => theme.unit * 13}px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.35s;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `}
  :hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        background-color: #7018fd;
      `}
  }
`

function NavigateButton({ buttonText, link, disabled, propsToPage }) {
  return (
    <NavigateButtonWrapper>
      <Link state={{ preferences: propsToPage }} to={link}>
        <Button disabled={disabled}> {buttonText} </Button>{' '}
      </Link>
    </NavigateButtonWrapper>
  )
}

export default NavigateButton

NavigateButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  propsToPage: PropTypes.array,
}
NavigateButton.defaultProps = {
  disabled: false,
  propsToPage: null,
}
