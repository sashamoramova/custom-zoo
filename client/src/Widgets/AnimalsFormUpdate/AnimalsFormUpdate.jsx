import React from "react";
import { useState } from "react";
import { message as antMessage, Button } from "antd";
import AnimalApi from "../../Entites/Animals/AnimalApi";

function AnimalsFormUpdate({ animal, setAnimals, setShowUpdateForm }) {
  const [inputs, setInputs] = useState({
    name: animal.name,
    type: animal.type,
    description: animal.description,
  });
  const isEmptyFormData =
    inputs.name.trim().length === 0 ||
    inputs.type.trim().length === 0 ||
    inputs.description.trim().length === 0;

  function changeInputs({ target }) {
    const { value, name } = target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  async function sendInputs(params) {
    // if (user.role !== "admin") {
    //   antMessage.error(`Нет прав для изменения`);
    //   return;
    // }
    if(isEmptyFormData){
      antMessage.error('Все поля обязательны к заполнению');
      return;
    }
    try {
      const { data, message, error, statusCode } = await AnimalApi.updateAnimal(
        animal.id,
        inputs
      );
      if (error) {
        antMessage.error(error);
        return;
      }
      if (statusCode === 200) {
        setAnimals((prev) => prev.map((el) => (el.id === data.id ? data : el)));
        setInputs({ name: "", type: "", description: "" });
        setShowUpdateForm(false);
      }
    } catch (error) {
      antMessage.error(error.message);
      console.log(error);
    }
  }
  console.log(inputs);
  
  return (
    <div>
      <input
        name="name"
        value={inputs.name}
        // placeholder="title"
        onChange={changeInputs}
      />
      <input
        name="type"
        value={inputs.type}
        // placeholder="body"
        onChange={changeInputs}
      />
      <input
        name="description"
        value={inputs.description}
        // placeholder="body"
        onChange={changeInputs}
      />
      <Button type="primary" onClick={sendInputs}>
        Отправить изменения
      </Button>

      {/* <Button text="Сохранить" onClick={sendInputs} /> */}
    </div>
  );
}

export default AnimalsFormUpdate;
