import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "c32a3cf86520dce9c4baf6ce5f9d83c6";

const params = {
  api_key: API_KEY,
};

export default {
  async getTrending() {
    try {
      const data = await axios.get("trending/all/day", { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const data = await axios.get(`/movie/${id}`, { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },

  async getMovieCast(id) {
    return await axios.get(`/movie/${id}/credits`, { params });
  },

  async getMovieReviews(id) {
    return await axios.get(`/movie/${id}/reviews`, { params });
  },

  async searchMovie(query) {
    return await axios.get(`/search/movie`, { params: { query, ...params } });
  }
};
