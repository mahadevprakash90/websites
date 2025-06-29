import axios from "axios";

const API = {
  async getMessages() {
    const response = await axios.get("/api/messages/");
    return response.data.messages;
  }
};

export default API;
