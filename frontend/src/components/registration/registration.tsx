import React from "react";
import { Link } from "react-router-dom";
import "./registration.css";

const Registration: React.FC = () => {
  return (
    <div className="background">
      <div className="reg">
        <h2>Вход</h2>
        <div className="reg_input">
          <label>Имя</label>
          <input type="text" placeholder="Введите имя" />
        </div>
        <div className="reg_input">
          <label>Фамилия</label>
          <input type="text" placeholder="Введите фамилию" />
        </div>
        <div className="reg_input">
          <label>E-Mail</label>
          <input type="e-mail" placeholder="Введите e-mail" />
        </div>
        <div className="reg_input">
          <label>Пароль</label>
          <input type="password" placeholder="Введите пароль" />
        </div>
        <div className="reg_input">
          <label>Повторите пароль</label>
          <input type="password" placeholder="Введите пароль" />
        </div>
        <button>Зарегистрироваться</button>
        <br />
        <a className="back_link" href="#">
          <Link to="/login">Вернуться</Link>
        </a>
      </div>
    </div>
  );
};

export default Registration;
