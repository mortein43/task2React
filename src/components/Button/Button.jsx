import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Button({ text, onClick, setClass }) {
  // Стан для відстеження активності кнопки
  const [isActive, setIsActive] = useState(false);

  // Функція для обробки кліку на кнопці
  const handleClick = () => {
    setIsActive(true); // Встановлюємо активність кнопки при кліку
    onClick(); // Виклик функції обробки події onClick, переданої через пропс
  };

  // Функція для зміни стану активності кнопки на false при натисканні на інші кнопки
  const handleReset = () => {
    setIsActive(false);
  };

  return (
    <button
      className={`${styles.button} ${
        isActive ? styles.active : styles.nonActive
      } ${setClass}`}
      onClick={() => {
        handleClick();
        handleReset();
      }}
    >
      {text}
    </button>
  );
}
