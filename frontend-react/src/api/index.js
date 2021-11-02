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
        return {pageType: data.page_model, page: data.init_state};
    };
    sendFeedback = async ({email, comment}) => {
        const res = await this.post(
            `/feedback/`,
            {email, comment}
        );
        return {
            'status': true
        }
    }

    convertTokenVk = async ({vkToken}) => {
        const res = await this.post(
            `/api/social-auth/convert-token/`,
            {
                grant_type: 'convert_token',
                client_id: 'XZuxoKGZ2VdcKAGhGtYAlCJhF0iFxWVGSG1ISEXs',
                client_secret: 'hv6TrF9TEO8zPrVaBMaeoEmefcvujRP0AxudHUKgrvI6BFacrBZQf8VMatGyDsKThCOSMg7KIzEBF6oeUyuFwiuSjQKGlybYEniw30rPRXzfySiaW2tXBf8sritpEXTu',
                backend: 'vk-oauth2',
                token: vkToken,
            }
        );
        console.log('res', res)
        return {
            'status': true
        }
    }

    convertTokenFacebook = async ({token}) => {
        const res = await this.post(
            `/api/social-auth/convert-token/`,
            {
                grant_type: 'convert_token',
                client_id: 'iAtAnJYaLYVCr5jJdTN1f0m4YDTBPGvRqx4C5UXC',
                client_secret: 'eKaXLML5GbG0zipti1VZnUMdStHjYsTdTV1wMGqqQa8bLqZNeiWJGuF0sHjdBsUv3n6Fs9Dk9np67JDQtJiOfyrezGE73mqc2h69NpjurVQUhryUWG0eWl6kIWYfPnI4',
                backend: 'facebook',
                token: token,
            }
        );
        console.log('res', res)
        return {
            'status': true
        }
    }
}

const MAIN_URL = process.env.REACT_APP_API_URL;
console.log(MAIN_URL, "MAIN_URL");

const api = new Api(`${MAIN_URL}`);
export default api;
