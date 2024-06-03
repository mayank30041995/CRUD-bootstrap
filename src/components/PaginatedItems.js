import React, { Suspense, lazy, useContext, useMemo, useState } from 'react'
import ReactPaginate from 'react-paginate'
// import Table from './Table'
import { StudentContext } from '../App'

const Table = lazy(() => import('./Table'))

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0)

  const studentContext = useContext(StudentContext)
  const { students, editHandle } = studentContext

  const studentsData = useMemo(() => {
    return students.map((student) => student)
  }, [students])

  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)

  const currentItems = studentsData.slice(itemOffset, endOffset)

  const pageCount = Math.ceil(studentsData.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % studentsData.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <div className="bg-body-secondary bg">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Table {...{ currentItems, editHandle }} />

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </Suspense>
    </div>
  )
}

export default PaginatedItems
