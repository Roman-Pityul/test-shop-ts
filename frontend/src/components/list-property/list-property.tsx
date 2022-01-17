import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProperty } from "../../redux/property/propertyActions";
import {
  SelectLoad,
  SelectPropertyItems,
} from "../../redux/property/selectors";
import { Spiner } from "../spiner/spiner";

import "./list-property.css";

const ListProperty: React.FC = () => {
  
  const dispatch = useDispatch();
  const property = useSelector(SelectPropertyItems);
  const isLoad = useSelector(SelectLoad);

  const handleOndeleteClock = (id: string | undefined) => {
    dispatch(DeleteProperty(id))
  }

  return (
    <div className="list-property_background">
      <div className="list-property_nav">
        <div className="list-property_nav-container">
          <Link style={{ textDecoration: "none" }} to="list-item">
            <p className="list-property_link">Листинг товаров</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="list-property">
            <p className="list-property_link orange_link">Листинг проперти</p>
          </Link>
        </div>
      </div>
      <div className="list-property_container">
        <div className="list-property_add-button">
          <Link to="/add-prop">
            <button className="add-prop_button">Добавить проперти</button>
          </Link>
        </div>
        <div className="list-property_content">
          {!isLoad ? (
            <table className="list-property_table">
              <th>Перечень проперти</th>
              <th>Тип проперти</th>
              <th>Управление</th>
              {property.map((prop) => {
                return (
                  <Fragment>
                    <tr>
                      <td>{prop.name}</td>
                      <td>{prop.type}</td>
                      <td>
                        <Link onClick={() => handleOndeleteClock(prop.id)} to="list-property">Удалить</Link>
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

export default ListProperty;
