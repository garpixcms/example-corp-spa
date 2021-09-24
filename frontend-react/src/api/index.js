import BaseApi from "@garpix/base-api";

class Api extends BaseApi {
  getLanguage = () => {
    return "ru";
  };
  axiosOverride = axios => {
    const language = this.getLanguage();
    axios.defaults.headers.common["Accept-Language"] = language;
    return axios;
  };
  getPage = async (params, queryParams = {}, axiosParams = {}) => {
    const slug = params[0];
    const res = await this.get(
      `/page${slug === "" ? "/" : slug}`,
      queryParams,
      axiosParams
    );
    const data = res.data;
    console.log(data, 'data')
    return { pageType: data.page_model, page: data.init_state };
  };
}

const MAIN_URL = process.env.REACT_APP_API_URL;
console.log(MAIN_URL, "MAIN_URL");

const api = new Api(`${MAIN_URL}`);
export default api;
