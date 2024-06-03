import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {
  useEffect,
  useState,
  createContext,
  lazy,
  Suspense,
  useRef,
} from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Register from './pages/Register'
import data from './utils/students.json'

// Lazy load
const FAQ = lazy(() => import('./pages/FAQ'))
const About = lazy(() => import('./pages/About'))
const Form = lazy(() => import('./pages/Form'))

export const StudentContext = createContext()

function App() {
  const navigate = useNavigate()
  const inputRef = useRef()
  const [searchParam] = useState(['firstName', 'age'])
  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState(null)

  // Edit On Table
  function editHandle(studentDetail) {
    if (studentDetail !== null) {
      setFormData(studentDetail)
      navigate(`/form/${studentDetail.id}`)
    } else {
      setFormData(null)
    }
  }

  // Header Search
  const handleSearch = () => {
    let searchInput = inputRef.current.value
    const filteredItems = data.students
    if (searchInput.length > 0 && filteredItems.length > 0) {
      const filtered = filteredItems.filter((item) => {
        return searchParam.some((newItem) => {
          return item[newItem]
            .toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        })
      })
      setStudents(filtered)
    } else {
      setStudents(filteredItems)
    }
  }

  useEffect(() => {
    if (data.students.length > 0) {
      setStudents(data.students)
    }
  }, [])

  return (
    <div>
      <Header {...{ handleSearch, ref: inputRef }} />

      <Routes>
        <Route
          path="/*"
          element={
            <StudentContext.Provider value={{ students, editHandle }}>
              <Home />
            </StudentContext.Provider>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/form"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Form />
            </Suspense>
          }
        />
        <Route
          path="/form/:id"
          element={
            <StudentContext.Provider value={{ formData }}>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Form />
              </Suspense>
            </StudentContext.Provider>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <FAQ />
            </Suspense>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
