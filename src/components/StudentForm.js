import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import * as formik from 'formik'
import * as yup from 'yup'
import { StudentContext } from '../App'

function StudentForm() {
  const studentForm = useContext(StudentContext)
  const { formData } = studentForm || {}

  const {
    id,
    firstName,
    lastName,
    email,
    age,
    city,
    country,
    group,
    state,
    terms,
    zip,
    file,
  } = formData || {}

  console.log('formDataformDataformData', formData)
  const { Formik } = formik

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, 'First Name must be 3 characters at minimum')
      .required(),
    lastName: yup
      .string()
      .min(3, 'Last Name must be 3 characters at minimum')
      .required(),
    email: yup.string().min(3, 'email be 3 characters at minimum').required(),
    city: yup.string().required(),
    country: yup.string().required('country must be accepted'),
    state: yup.string().required(),
    zip: yup
      .number()
      .nullable(false)
      .integer()
      .min(3, 'Zip must be 3 at minimum')
      .required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  })

  return (
    <div className="bg-body-secondary bg">
      <Formik
        enableReinitialize
        validationSchema={schema}
        onSubmit={(e) => console.log('form submit', e)}
        initialValues={{
          firstName: firstName || '',
          lastName: lastName || '',
          email: email || '',
          city: city || '',
          country: country || '',
          age: age || '',
          group: group || [],
          state: state || '',
          zip: zip || '',
          file: file || null,
          terms: terms || false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikemail2">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* Group */}
            <Row className="mb-0">
              <Form.Group as={Col} md="3">
                <Form.Label>Group</Form.Label>
                {['Group A', 'Group B', 'Group C', 'Group D'].map(
                  (value, i) => (
                    <div key={`inline-${value}`} className="mb-3">
                      <Form.Check
                        inline
                        label={value}
                        value={value}
                        name="group"
                        defaultChecked={values.group.find((checked) =>
                          checked !== value ? false : true
                        )}
                        onChange={handleChange}
                        type="checkbox"
                        id={`inline-${value}-1`}
                      />
                    </div>
                  )
                )}
              </Form.Group>
              {/* Age */}

              <Form.Group as={Col} md="3">
                <Form.Label>Age</Form.Label>
                {['5-8 years', '9-13 years', '14-18 years', '19-24 years'].map(
                  (value) => (
                    <div key={`inline-${value}`} className="mb-3">
                      <Form.Check inline type="radio" id={`inline-${value}-2`}>
                        <Form.Check.Input
                          type="radio"
                          label={value}
                          name="age"
                          defaultChecked={values.age !== value ? false : true}
                          onChange={handleChange}
                        />
                        <Form.Check.Label>{`${value}`}</Form.Check.Label>
                      </Form.Check>
                    </div>
                  )
                )}
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormikcountry108"
              >
                <Form.Label>Country</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    isInvalid={!!errors.country}
                    aria-label="Default select example"
                  >
                    <option value="">Select Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.country}
                  </Form.Control.Feedback>{' '}
                </InputGroup>
              </Form.Group>
            </Row>

            <Form.Group className="position-relative mb-4">
              <Form.Label>File</Form.Label>
              <Form.Control
                type="file"
                required
                name="file"
                onChange={handleChange}
                isInvalid={!!errors.file}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="position-relative mb-4">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StudentForm
