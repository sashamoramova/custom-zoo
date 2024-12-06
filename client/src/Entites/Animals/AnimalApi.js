import { axiosInstance } from "../../Shared/lib/axiosInstance";

class AnimalApi {
  static async getAnimals() {
    try {
      const { data } = await axiosInstance.get("/animals");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
  static async updateAnimal(id, updateData) {
    try {
        
      const { data } = await axiosInstance.put(`/animals/${id}`, updateData);
      
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
  static async uploadAnimalPhoto(id, img) {
    try {
      const resp = await axiosInstance.post(`/images/upload/${id}`, img, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(resp,123);
      
      return resp;
    } catch (error) {
      return error.response.data;
    }
  }
  static async deleteAnimalById(id) {
    try {
      const { data } = await axiosInstance.delete(`/animals/${id}`);

      return data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default AnimalApi;
