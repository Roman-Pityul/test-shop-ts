import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddNewCars } from "../../redux/cars/carsActions";

import "./add-item.css";
import { Plus } from "../../img/plus";
import { Minus } from "../../img/minus";
import { SelectPropertyItems } from "../../redux/property/selectors";

const AddItem: React.FC = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [property, setProperty] = React.useState([
    { id: Math.random().toString(), name: '', type: [''] },
  ])
  const [propVision, setPropVision] = React.useState(false);

  const propertys = useSelector(SelectPropertyItems)

  const dispatch = useDispatch(); 
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

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
    if (!propVision) {
      setPropVision(!propVision);
    }
    else {
      setProperty([...property, { id: Math.random().toString(), name: '', type: ['', ''] }])
    }
  };

  const handeRemooveProperty = (id: string) => {
    const values = [...property]
    values.splice(values.findIndex(value => value.id === id), 1);
    setProperty(values);
  }

  const handleAddTypes = (id: string) => {
    console.log(property)
    const values = [...property]
    const idx = values.findIndex((value) => value.id === id)
    const prop = property[idx]
    const newProp = prop.type.push('')
    //@ts-ignore
    setProperty([...property.slice(0, idx), newProp, ...property.slice(idx + 1)])
  }

  return (
    <div className="add-item_background">
      <div className="add-item_container">

        {/* Навигация */}

        <div className="add-item_nav">
          <button className="red white_link" onClick={handleBack}>
            Вернуться
            </button>
          <button onClick={handleSubmit} className="green white_link">
            Сохранить
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

          {propVision && property.map((prop) => (
            <div className="add-item_property_row" key={prop.id}>
              <div className="add-item_property_colum">
                <div className="add-item_property_colum_top">
                  {/* @ts-ignore */}
                  <a onClick={() => handeRemooveProperty(prop.id)}>
                    <Minus />
                  </a>
                  <label>Свойство 1</label>
                </div>
                <div className="add-item_property_colum_bottom">
                  <select>
                    {
                      propertys.map((item) => {
                        return (
                          <option>{item.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="add-item_property_colum">
                <div className="add-item_property_colum_top">
                  <label>Значение</label>
                </div>
                <div className="add-item_property_colum_bottom">
                  {
                    prop.type.map((item2) => 
                      <>
                        <input
                            type="text"
                            //value={}
                          />
                          <a><Minus /></a>
                          {/* @ts-ignore */}
                          <a onClick={() => handleAddTypes(prop.id)}><Plus /></a>
                      </>
                    )
                  }
                          <br />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddItem
