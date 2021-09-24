import api from "./api";

export const PATHS = {
  ALL: {
    path: "*",
    fetchInitialData: api.getPage
  }
};
