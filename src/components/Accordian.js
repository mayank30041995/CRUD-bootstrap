import { Accordion as Collapse } from 'react-bootstrap'

function Accordion() {
  return (
    <div className="bg-body-secondary bg">
      <Collapse defaultActiveKey="0">
        <Collapse.Item eventKey="0">
          <Collapse.Header>File 1</Collapse.Header>
          <Collapse.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Collapse.Body>
        </Collapse.Item>
        <Collapse.Item eventKey="1">
          <Collapse.Header>File 2</Collapse.Header>
          <Collapse.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Collapse.Body>
        </Collapse.Item>
      </Collapse>
    </div>
  )
}

export default Accordion
