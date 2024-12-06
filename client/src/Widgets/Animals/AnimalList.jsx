import { useEffect, useState } from "react";
import { axiosInstance } from "../../Shared/lib/axiosInstance";
import AnimalCard from "./AnimalCard";

function AnimalList({user}) {
  const [animals, setAnimals] = useState([]);
  const loadAnimals = async () => {
    const {
      data: { data },
    } = await axiosInstance.get("/animals");
    setAnimals(data);
    console.log(data);
    

  };
  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <>
      {animals.map((animal) => (
        <AnimalCard animal={animal} setAnimals={setAnimals} user={user}/>
      ))}
    </>
  );
}

export default AnimalList;
