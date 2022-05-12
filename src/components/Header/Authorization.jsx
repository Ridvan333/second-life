import React from "react";
import style from "./header.module.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Authorization = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <button className={style.listHeadSingIn} onClick={() => setLgShow(true)}>
        Войти и Регистрация
      </button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className={style.modalHeader}>
              <div className={style.authorization}>
                <div className={style.sing}>Войти</div>
                <div className={style.sing}>Регистрация</div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.registration}>Регистрация</div>
          <div className={style.changeClientAndShelter}>
            <div className={style.changeOne}>
              <span>
                <ion-icon name="person-outline"></ion-icon>
              </span>
              Клиент
            </div>
            <div className={style.changeTwo}>
              <span>
                <ion-icon name="paw-outline"></ion-icon>
              </span>
              Приют
            </div>
          </div>
          <div className={style.entryFieldInfo}>
            <input
              type="text"
              placeholder="Имя*"
              className={style.entryFieldInputName}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder="Телефон*"
              className={style.entryFieldInputPhone}
            />
            <input
              id="userPassword"
              type="password"
              placeholder="Пароль*"
            ></input>
            <input
              id="userPassword"
              type="password"
              placeholder="Повторите пароль*"
            ></input>
          </div>
          <div className={style.registrationBtnPosition}>
            <button className={style.registrationBtn}>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Authorization;
