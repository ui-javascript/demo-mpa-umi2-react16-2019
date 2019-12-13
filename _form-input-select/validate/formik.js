import React from "react"
import ReactDOM from "react-dom"

import { Formik, Form, Field } from 'formik';

const Basic = () => (
  <div>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        // }, 400);
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder={"邮箱"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </div>


          <div className={"mt-2"}>
            <input
              type="password"
              name="password"
              placeholder={"密码"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>

          <button className={"mt-2"} type="submit" disabled={isSubmitting}>
            Submit
          </button>

        </form>
      )}
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
