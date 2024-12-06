import React, { useRef, useState } from "react";
const { Meta } = Card;
import { Button, Card, Modal } from "antd";
import AnimalApi from "../../Entites/Animals/AnimalApi";
import { message as antMessage } from "antd";
import AnimalsFormUpdate from "../AnimalsFormUpdate/AnimalsFormUpdate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MiniSlider from "./MiniSlider";

function AnimalCard({ user, animal, setAnimals }) {
  const [img, setImg] = useState(null);
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = async () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  async function deleteAnimal(params) {
    try {
      const { data, statusCode, error, message } =
        await AnimalApi.deleteAnimalById(animal.id);
      if (statusCode === 200) {
        setAnimals((prev) => prev.filter((el) => el.id !== data.id));
        antMessage.success(message);
      }
    } catch (error) {
      antMessage.error(error);
      return;
    }
  }
  async function addImg(params) {
    try {
      const formData = new FormData();
      formData.append("animalImg", img);
      const { data } = await AnimalApi.uploadAnimalPhoto(animal.id, formData);
      console.log(data.data.img1, 123);
      setAvatar(data.data.img1);
    } catch (error) {
      antMessage.error(error);
      return;
    }
  }
 
  return (
    <>
      {/* <img
        src={`${import.meta.env.VITE_API}images/${animal.Images[6].img1}`}
        width="40"
      /> */}
      <Card
        hoverable
        onClick={openModal}
        style={{
          width: 250,
          margin: "10px",
        }}
        cover={<img alt="example" src={animal.Images[0].img1} />}
      >
        <Meta
          title={<span>{animal.name}</span>}
          description={<span>{animal.type}</span>}
        />
      </Card>
      <Modal
        title={
          <h2>
            {animal.type}: ({animal.name})
          </h2>

        }
        footer={
          user?.role === 'admin' && (<div>
            <input
              type="file"
              name="animalImg"
              onChange={(e) => setImg(e.target.files[0])}
              ref={fileInputRef}
            />
            <Button type="primary" onClick={addImg}>
              Добавить фото
            </Button>
            {showUpdateForm ?  (
              <Button
                type="primary"
                onClick={() => setShowUpdateForm((prev) => !prev)}
              >
                Скрыть
              </Button>
            ):(
              <Button
                type="primary"
                onClick={() => setShowUpdateForm((prev) => !prev)}
              >
                Изменить
              </Button>
            ) }
            <Button
                type="primary"
                onClick={deleteAnimal}
              >
                Удалить
              </Button>
            {showUpdateForm && <AnimalsFormUpdate animal={animal} setAnimals={setAnimals} setShowUpdateForm={setShowUpdateForm}/>}
          </div>)
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <MiniSlider images={animal.Images} />
        <p>{animal.description}</p>
        
      </Modal>
    </>
  );
}

export default AnimalCard;
