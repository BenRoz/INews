import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const BoxWrapper = styled.div`
  width: 50%;
  position: relative;
  background: ${({ bgColor }) => bgColor};
  padding: ${({ theme }) => theme.unit * 8}px;
  border: ${({ isChosen }) =>
    isChosen ? `3px solid gold` : `3px solid transparent;`};
  border-radius: 6px;
  max-width: 360px;
  margin: ${({ theme }) => theme.unit * 2}px;
  ${({ theme }) => theme.desktop`
      width: 100%
   `}
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .iconHover {
    transition: opacity 0.3s, transform 0.3s;
    transform: rotate(-180deg) scale(0.5);
    opacity: 0;
  }
  .iconDefault {
    transition: opacity 0.3s, transform 0.3s;
  }
  :hover {
    box-shadow: 2px 4px 8px 3px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease-in-out;
    .iconDefault {
      transform: rotate(180deg) scale(0.5);
      opacity: 0;
    }
    .iconHover {
      transform: rotate(0deg) scale(1.1);
      opacity: 1;
    }
  }
`

const Name = styled.h2`
  font-weight: 700;
  font-size: 20px;
`

const IconWrapper = styled.div`
  margin: ${({ theme }) => `0 auto ${theme.unit * 3}px`}
  width: 100%;
  height: 60px;
  position: relative;
  }
`

function PreferenceBox({ preferenceInfo, onPreferenceClick, isChosen }) {
  const { bgColor, name, icon, id } = preferenceInfo
  return (
    <BoxWrapper
      isChosen={isChosen}
      bgColor={bgColor}
      onClick={onPreferenceClick(id)}
    >
      <IconWrapper>
        <FontAwesomeIcon
          className="icon"
          icon={icon}
          size="3x"
          className="icon iconDefault"
        />
        <FontAwesomeIcon
          className="icon"
          icon={isChosen ? faThumbsDown : faThumbsUp}
          size="3x"
          className="icon iconHover"
        />
      </IconWrapper>
      <Name>{name}</Name>
    </BoxWrapper>
  )
}

PreferenceBox.propTypes = {
  preferenceInfo: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
  onPreferenceClick: PropTypes.func.isRequired,
  isChosen: PropTypes.bool.isRequired,
}
export default PreferenceBox
