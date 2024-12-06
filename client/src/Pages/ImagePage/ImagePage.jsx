import React, { useRef, useState } from "react";
import { axiosInstance } from "../../Shared/lib/axiosInstance";

function ImagePage(props) {
  const [img, setImg] = useState(null);
  // const [img2]
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);

  async function sendFile() {
    try {
      const formData = new FormData();
      formData.append("avatar", img);

      const { data } = await axiosInstance.post("/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data);
      setAvatar(data.filename);
      setImg(null)
      fileInputRef.current.value = '';

    } catch (error) {
      console.log(error);
    }
  }
  console.log(avatar, 111);

  return (
    <div>
      <img src={`${import.meta.env.VITE_API}images/${avatar}`} alt="фыв" width='40' heigth='40'/>
      <input
            type="file"
            name="avatar"
            onChange={(e) => setImg(e.target.files[0])}
            ref={fileInputRef} 
          />
      {/* <input type="file" /> */}
      <button onClick={sendFile}>Добавить</button>
    </div>
  );
}

export default ImagePage;
