const axios = require("axios");

/**const baseUrl = "http://localhost:1337/api";
const apiToken = "71e0652a82505bfe9a1ceb44e57dadac9c68e0aa86d34134366f422ca02c999bf8a89172139325e881816a059689529e2e2b1a45d13f1c273690305c9946391056ed173e4df0846cbafc35ad6e2cca8051a36923b0dfceb08d148cb35ff69c58519ecb68f72da720f78c6f6d42ebc068da23e1aec2af184bb115f45a74b47d2a";
// Axios config
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `bearer ${apiToken}`,
    "Content-Type": "application/json",
  },
});*/

// Experiences
export async function getCategories() {
    try {
      const response = await axios.get("http://127.0.0.1:1337/api/categories");
      console.log("response: "+response);
  
      if (response.status !== 200) {
        throw new Error(`Erreur ${response.status}`);
      }
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("Error while retrieving data: ", error);
      return null;
    }
  }
/*

export async function getCategoriesID(id) {
  try {
    const response = await axiosInstance.get("/categories/" + id);

    if (response.status !== 200) {
      console.log("not found");
    }

    return response.data.data;
  } catch (error) {
    console.log("Error while retrieving data: ", error);
    return null;
  }
}

*/