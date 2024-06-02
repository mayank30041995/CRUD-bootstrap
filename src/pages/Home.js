import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PaginatedItems from '../components/PaginatedItems'
import Container from '../components/Container'

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <PaginatedItems itemsPerPage={10} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
