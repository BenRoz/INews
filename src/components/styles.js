import styled from 'styled-components'

export const MainHeader = styled.h2`
  font-size: 56px;
  font-weight: 300;
  text-align: center;
  color: #000000;
  margin-bottom: ${({ theme }) => theme.unit * 5}px;
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #7a8589;
  margin-bottom: ${({ theme }) => theme.unit * 4}px;
  max-width: 600px;
  margin: 0 auto;
`
