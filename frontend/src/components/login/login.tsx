import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

import "./login.css";

const Login: React.FC = () => {
  const validateSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Должна быть строка")
      .required("Обязательно для заполнения"),
    password: yup
      .string()
      .typeError("Должна быть строка")
      .required("Обязательно для заполнения")
  })

  return (
    <Formik
      initialValues={{
        name: "",
        password: ""
      }}
      validateOnBlur
      onSubmit={() => {}}
      validationSchema={validateSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty
      }) => (
        <div className="background">
          <div className="login">
            <h2>Вход</h2>
            <div className="login_input">
              <label>Логин</label>
              <input
                type="text"
                name="name"
                placeholder="Введите логин"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (<p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}
                >
                  {errors.name}
                </p>
              )}
            </div>
            <div className="login_input">
              <label>Пароль</label>
              <input
                type="password"
                name="password"
                placeholder="Введите пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {touched.password && errors.password && (<p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>
                {errors.password}
              </p>
            )}
            <Link to="/list-item">
              <button
                className="login_button"
                //@ts-ignore
                //onClick={handleSubmit}
                disabled={!isValid && !dirty}
              >
                Вход
              </button>
            </Link>
            <br />
            <a className="back_link" href="#">
              <Link to="/reg">Зарегистрироваться</Link>
            </a>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
