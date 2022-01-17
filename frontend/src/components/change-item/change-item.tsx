import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddNewCars } from "../../redux/cars/carsActions";

import "./change-item.css";
import { Plus } from "../../img/plus";
import { Minus } from "../../img/minus";

const ChangeItem: React.FC = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [propVision, setPropVision] = React.useState(false);
  const [countValues, setCountValues] = React.useState(1);
  
  const dispatch = useDispatch();

  const handlechangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handlechangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImage(e.target.value);
  };

  const handlechangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPrice(e.target.value);
  };

  const handlechangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setdescription(e.target.value);
  };

  const handleSubmit = () => {
    const id = Math.random().toString()
    dispatch(
      AddNewCars({
        id: id,
        name: name,
        image: image,
        price: price,
        description: description
      })
    );
  };

  const onPlusClick = () => {
    setPropVision(!propVision);
  };

  const addCountValues = () => {
    setCountValues(countValues + 1)
  }

  return (
    <div className="add-item_background">
      <div className="add-item_container">
        {/* Навигация */}
        <div className="add-item_nav">
          <button className="red">
            <Link className="white_link" to="/list-item">
              Вернуться
            </Link>
          </button>
          <button onClick={handleSubmit} className="green">
            <Link className="white_link" to="list-item">
              Сохранить
            </Link>
          </button>
        </div>

        {/* Добавление товара */}
        <h3>Добавление товара</h3>
        <div className="add-item_input">
          <label>
            Название товара <span className="span-red">*</span>
          </label>
          <br />
          <input onChange={handlechangeName} type="text" />
        </div>
        <div className="add-item_input">
          <label>
            Стоимость товара <span className="span-red">*</span>
          </label>
          <br />
          <input onChange={handlechangePrice} type="text" />
        </div>
        <div className="add-item_input">
          <label>
            Изображение <span className="span-red">*</span>
          </label>
          <br />
          <input onChange={handlechangeImage} type="text" />
        </div>
        <div className="add-item_input">
          <label>Описание</label>
          <br />
          <textarea onChange={handlechangeDescription} />
        </div>

        {/* Добавление свойств товару */}
        <div className="add-item_property">
          <div className="add-item_property_header">
            <h3>Добавление товару свойств</h3>
            <a onClick={onPlusClick}>
              <Plus />
            </a>
          </div>
          {propVision && (
            <div className="add-item_property_row">
              <div className="add-item_property_colum">
                <div className="add-item_property_colum_top">
                  <a>
                    <Minus />
                  </a>
                  <label>Свойство 1</label>
                </div>
                <div className="add-item_property_colum_bottom">
                  <select>
                    <option>Цввет авто</option>
                    <option>Год выпуска</option>
                    <option>Тип топлива</option>
                  </select>
                </div>
              </div>
              <div className="add-item_property_colum">
                <div className="add-item_property_colum_top">
                  <label>Значение</label>
                </div>
                <div className="add-item_property_colum_bottom">
                  <input/>
                  <a>
                    <Minus />
                  </a>
                </div>
                <div className="add-item_property_colum_plus">
                  <a onClick ={addCountValues}>
                    <Plus />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangeItem
