class AnimalValidator {
  static validate(data) {
    const { name, type, description } = data;
    if (!name || typeof name !== "string" || name.trim === "") {
      return {
        idValid: false,
        error: "Name is required and must be a non-empty string",
      };
    }
    if (!type || typeof type !== "string" || type.trim === "") {
      return {
        idValid: false,
        error: "Type is required and must be a non-empty string",
      };
    }
    if (!description || typeof description !== "string" || description.trim === "") {
      return {
        idValid: false,
        error: "Description is required and must be a non-empty string",
      };
    }
    return{
      isValid:true,
      error:null
    }
  }
}
module.exports = AnimalValidator;
