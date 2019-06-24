import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const DEFAULT_SIDE_PADDING = 13

const NavigateButtonWrapper = styled.div`
  height: 50px;
  border-radius: 32px;
  margin: 40px auto 0;
  min-width: 260px;
  ${({ theme }) => theme.mobile`
      min-width: 40px;
   `}
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
  padding: 0
    ${({ theme, buttonSidePadding }) =>
      theme.unit * (buttonSidePadding || DEFAULT_SIDE_PADDING)}px;
  display: flex;
  align-items: center;
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
  ${({ theme }) => theme.mobile`
      padding: 0 ${theme.unit * 3}px;
   `}
`
const ButtonText = styled.span`
  margin-left: ${({ theme, isIconComp }) =>
    isIconComp ? `${theme.unit * 2}px` : `0`};
`

function NavigateButton({
  buttonText,
  link,
  disabled,
  propsToPage,
  iconComp,
  buttonSidePadding,
}) {
  return (
    <NavigateButtonWrapper>
      <Link state={{ preferences: propsToPage }} to={link}>
        <Button disabled={disabled} buttonSidePadding={buttonSidePadding}>
          {' '}
          {iconComp}
          <ButtonText isIconComp={!!iconComp}>{buttonText}</ButtonText>
        </Button>{' '}
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
  iconComp: PropTypes.node,
  buttonSidePadding: PropTypes.number,
}
NavigateButton.defaultProps = {
  disabled: false,
  propsToPage: null,
  iconComp: undefined,
  buttonSidePadding: null,
}
