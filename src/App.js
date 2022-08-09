// Framework Imports
import React from 'react'

// Component Imports
import Header from './components/modules/Header/Header'

// CSS Imports
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <Header />
      <h1>
        Welcome to React App thats build using Webpack and Babel separately
      </h1>
    </StyledApp>
  )
}
export default App
