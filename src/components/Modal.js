import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalAlert({ student, show, setShow, handleShow }) {
  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure, you wish to delete this record?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => handleShow(student, false, true)}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAlert
