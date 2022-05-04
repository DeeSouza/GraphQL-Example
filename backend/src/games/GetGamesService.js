import api from "../services/api";

class GetGamesService {
  async execute() {
    const response = await api.get("games");

    return response.data;
  }
}

export default GetGamesService;
