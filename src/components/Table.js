import { useContext, useMemo } from 'react'
import TableModel from 'react-bootstrap/Table'
import { StudentContext } from '../App'
import { Button } from 'react-bootstrap'

function Table({ currentItems, editHandle }) {
  return (
    <div>
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
                  <Button variant="danger">Delete</Button>{' '}
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
