import { useState } from 'react'
import TableModel from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import ModalAlert from './Modal'
import { socketURL } from '../utils/url'

function Table({ currentItems, editHandle }) {
  const [show, setShow] = useState(false)
  const [student, setStudent] = useState('')

  const handleShow = (student, show, confirm = false) => {
    const { id } = student
    const requestOptions = {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    setShow(show)
    setStudent(student)
    if (id && confirm) {
      fetch(`${socketURL}/students/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log('result', result))
        .catch((error) => console.log('error', error))
    }
  }

  return (
    <div>
      <ModalAlert {...{ student, show, setShow, handleShow }} />
      <TableModel striped>
        <thead>
          <tr>
            <th>Ids</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((student) => {
            return (
              <tr key={student.id.toString()}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  {/* <Button variant="secondary">View</Button>{' '} */}
                  <Button
                    variant="primary"
                    onClick={(e) => editHandle(student)}
                  >
                    Edit
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={(e) => handleShow(student, true)}
                  >
                    Delete
                  </Button>{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableModel>
    </div>
  )
}

export default Table
