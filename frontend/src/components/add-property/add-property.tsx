import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoadNewProperty } from "../../redux/property/propertyActions";
import * as yup from 'yup'

import "./add-property.css";

const AddProperty: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

  const validateSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().max(50, 'Макимум 50 символов').required('Обязательно для заполнения'),
    type: yup.string().required('Обязательно для заполнения')
  })

  return (
    <Formik
      initialValues={{
        id: Math.random().toString(),
        name: '',
        type: ''
      }}
      validateOnBlur
      validationSchema={validateSchema}
      onSubmit={(values) => {
        dispatch(
          LoadNewProperty({
            id: values.id,
            name: values.name,
            type: values.type
          }))
        handleBack()
      }}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty
      }) => (
        <div className="add-property_background">
          <div className="add-property_container">
            <div className="add-property_nav">
              <button className="red white_link" onClick={handleBack} >
                Вернуться
              </button>
              <button
                className="green white_link"
                disabled={!isValid && !dirty}
                //@ts-ignore 
                onClick={handleSubmit}>
                Сохранить
              </button>
            </div>
            <h3>Добавление свойства</h3>
            <div className="add-property_input">
              <label>
                Название свойства <span className="span-red">*</span>
              </label>
              <br />
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange} />

              {touched.name && errors.name && <p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>{errors.name}</p>}

            </div>
            <div className="add-property_input">
              <label>
                Укажите тип свойства <span className="span-red">*</span>
              </label>
              <p>
                <input
                  type="radio"
                  name="type"
                  value="dropdown"
                  onChange={handleChange}
                />{" "}
                Dropdown
              </p>
              <p>
                <input
                  type="radio"
                  name="type"
                  value="number"
                  onChange={handleChange}
                />{" "}
                Number
              </p>
              <p>
                <input
                  type="radio"
                  name="type"
                  value="string"
                  onChange={handleChange}
                />{" "}
                String
              </p>

              {touched.type && errors.type && <p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>{errors.type}</p>}

            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddProperty;
