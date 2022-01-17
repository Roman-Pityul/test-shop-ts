import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ClearCar, DeleteCar } from "../../redux/cars/carsActions";
import { selectCars, selectLoad } from "../../redux/cars/selectors";
import { Spiner } from "../spiner/spiner";

import "./list-item.css";

const ListItem: React.FC = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoad = useSelector(selectLoad);

  dispatch(ClearCar())

  const handleOnDeleteClick = (id: string | undefined) => {
    dispatch(DeleteCar(id));
  }
  
  return (
    <div className="list-item_background">
      <div className="list-item_nav">
        <div className="list-item_nav-container">
          <Link style={{ textDecoration: "none" }} to="list-item">
            <p className="list-item_link orange_link">Листинг товаров</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="list-property">
            <p className="list-item_link">Листинг проперти</p>
          </Link>
        </div>
      </div>
      <div className="list-item_container">
        <div className="list-item_add-button">
          <Link to="/add-item">
            <button className="add-item_button">Добавить товар</button>
          </Link>
        </div>
        <div className="list-item_content">
          {!isLoad ? (
            <table className="list-item_table">
              <th>Перечень товаров</th>
              <th>Стоимость</th>
              <th>Управление</th>
              {cars.map((car) => {
                return (
                  <Fragment>
                    <tr>
                      <td>
                        <Link style={{textDecoration: "none", color: "black"}} to={"/item/" + car.id}>{car.name}</Link>
                      </td>
                      <td>{car.price}</td>
                      <td>
                        <a href="#">Редактировать</a>
                        <Link
                          className="last_link"
                          to="list-item"
                          onClick={() => handleOnDeleteClick(car.id)}
                        >
                          Удалить
                        </Link>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </table>
          ) : (
            <Spiner />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListItem);
