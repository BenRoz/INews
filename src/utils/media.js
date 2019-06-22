import { css } from 'styled-components'

const sizes = {
  desktop: 960,
  ipad: 780,
  mobile: 400,
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
