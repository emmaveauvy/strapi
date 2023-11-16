const axios = require("axios");


export async function getPins() {
    try {
      const response = await axios.get("http://127.0.0.1:1337/api/pins?populate=*");
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
