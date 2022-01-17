import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoadCarFromApi } from "../../redux/cars/carsActions";
import { selectCar } from "../../redux/cars/selectors";
import { checkPropertyType } from "../../utils/checkProperty";
import { Spiner } from "../spiner/spiner";
import "./item.css";

const Item: React.FC = (props): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    // @ts-ignore
    dispatch(LoadCarFromApi(props.match.params.itemId))
  }, [dispatch])
  
  const car = useSelector(selectCar);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="background">
      <div className="link_back">
        <Link className="back" to="" onClick={handleBack}>
          Вернуться
        </Link>
      </div>
      <div className="container">
        {car ? (
        <><div className="item_top">
            <div className="item_image">
              <img src={car.image} />
            </div>
            <div className="item_description">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </div>
          </div>
            <div className="item_content">
              <div className="item_input">
                <label>Стоимость</label>
                <br />
                <span>{car.price} $</span>
              </div>
              <div className="item_input">
                {car.property &&
                  car.property.map(
                    (prop: { name: React.ReactNode; type: React.ReactNode; }) => {
                      return (
                        <React.Fragment>
                          <div className="item_input">
                            <label>{prop.name}</label>
                            <br />
                            <span>{checkPropertyType(prop.type)}</span>
                          </div>
                          <div className="item_input"></div>
                        </React.Fragment>
                      );
                    }
                  )}
                <button>Беру!!!!</button>
              </div>
            </div></>) : <Spiner/>}
      </div>
    </div>
  );
};

export default Item;
