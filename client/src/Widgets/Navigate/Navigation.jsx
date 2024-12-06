import React from "react";
import styles from "./Navigation.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "../../Shared/lib/Button";
import { message as antMessage } from "antd";
import UserApi from "../../Entites/Users/UserApi";
import { setAccessToken } from "../../Shared/lib/axiosInstance";

export default function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  //NOTE - метод для выхода юзера (чистит куку, сбрасывает состояние юзера)
  const signOutHandler = async () => {
    try {
      const { statusCode, error, message } = await UserApi.signOut();
      if (error) {
        antMessage.error(error);
        return;
      }

      antMessage.success(message);
      if (statusCode === 200) {
        setAccessToken("");
        setUser(null);
      }
    } catch (error) {
      antMessage.error(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <Button text="Главная" onClick={() => navigate("/")} />

        <Link to="/price">
          <Button text="Прайс" />
        </Link>

        <Link to="/animals">
          <Button text="Божьи твари" />
        </Link>

        {!user && (
          <>
            <Link to="/signin">
              <Button text="Войти" />
            </Link>

            <Link to="/signup">
              <Button text="Регистрация" />
            </Link>
          </>
        )}

        {user && (
          <>
            <span>{user.name}</span>{" "}
            <Button text="Выйти" onClick={signOutHandler} />{" "}
          </>
        )}
        
      </div>

      <h1>FOOTER</h1>
    </div>
  );
}
