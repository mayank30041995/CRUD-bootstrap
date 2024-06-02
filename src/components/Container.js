import React from 'react'
import { Container as Wrapper } from 'react-bootstrap'

function Container({ children }) {
  return (
    <div className="App-header">
      <Wrapper fluid className="paper">
        {children}
      </Wrapper>
    </div>
  )
}

export default Container
