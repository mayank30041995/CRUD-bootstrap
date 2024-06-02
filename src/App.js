import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Form from './pages/Form'
import FAQ from './pages/FAQ'
import Register from './pages/Register'
import data from './utils/students.json'

export const StudentContext = createContext()

function App() {
  const navigate = useNavigate()

  const [students, setStudents] = useState([])

  const [formData, setFormData] = useState(null)

  function editHandle(studentDetail) {
    if (studentDetail !== null) {
      setFormData(studentDetail)
      navigate(`/form/${studentDetail.id}`)
    } else {
      setFormData(null)
    }
  }

  useEffect(() => {
    if (data.length > 0) {
      setStudents(data)
    }
  }, [])

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/*"
          element={
            <StudentContext.Provider value={{ students, editHandle }}>
              <Home />
            </StudentContext.Provider>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route
          path="/form/:id"
          element={
            <StudentContext.Provider value={{ formData }}>
              <Form />
            </StudentContext.Provider>
          }
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
