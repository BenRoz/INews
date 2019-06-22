import React from 'react'
import { ThemeProvider } from 'styled-components'
import media from './media'

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      primaryFont: 'Arial',
      defaultBgColor: '#f4f4f4',
      unit: 6,
      ...media,
    }}
  >
    {children}
  </ThemeProvider>
)
export default Theme
