import BaseApi from "@garpix/base-api";
import { setCookie, getCookie, removeCookie } from '../utils';

class Api extends BaseApi {
    constructor(MAIN_URL) {
        super(MAIN_URL);
        this.accessToken = null;
        this.ACCESS_TOKEN_EXPIRES_KEY = 'access_token_expires';
    }

    clearAuth = () => {
        removeCookie(this.ACCESS_TOKEN_EXPIRES_KEY);
    }

    getAccessToken() {
        if (!this.accessToken) {
            this.accessToken = getCookie(this.ACCESS_TOKEN_KEY);
        }
        return this.accessToken;
    }

    setAccessToken(accessToken) {
        this.accessToken = accessToken;
        setCookie(this.ACCESS_TOKEN_KEY, accessToken)
    }

    getLanguage = () => {
        return "ru";
    };

    axiosOverride = axios => {
        const language = this.getLanguage();
        axios.defaults.headers.common["Accept-Language"] = language;
        const token = this.getAccessToken();
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        }
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
        return { pageType: data.page_model, page: data.init_state };
    };

    sendFeedback = async ({ email, comment }) => {
        const res = await this.post(
            `/feedback/`,
            { email, comment }
        );
        return {
            'status': true
        }
    }

    login = async (params) => {
        const res = await this.post(`/auth/login/`, params)
        console.log(res, 'res')
        this.setAccessToken(res.data.access_token);
        return res.data
    }

    currentUser = async () => {
        const res = await this.get(`/user/current/`)
        return res.data
    }

    convertTokenVk = async ({ vkToken }) => {
        const res = await this.post(
            `/social-auth/convert-token/`,
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

    convertTokenFacebook = async ({ token }) => {
        const res = await this.post(
            `/social-auth/convert-token/`,
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

    convertTokenGoogle = async ({ token }) => {
        const res = await this.post(
            `/social-auth/convert-token/`,
            {
                grant_type: 'convert_token',
                client_id: 'iAtAnJYaLYVCr5jJdTN1f0m4YDTBPGvRqx4C5UXC',
                client_secret: 'eKaXLML5GbG0zipti1VZnUMdStHjYsTdTV1wMGqqQa8bLqZNeiWJGuF0sHjdBsUv3n6Fs9Dk9np67JDQtJiOfyrezGE73mqc2h69NpjurVQUhryUWG0eWl6kIWYfPnI4',
                backend: 'google-oauth2',
                token: token,
            }
        );
        console.log('res', res)
        return {
            'status': true
        }
    }

    convertTokenApple = async ({ token }) => {
        const res = await this.post(
            `/social-auth/convert-token/`,
            {
                grant_type: 'convert_token',
                client_id: 'CSDuH8UgHDTFue2GbjZbYJmaRm7VY70QVEFj6A4T',
                client_secret: 'ic0GJAhwLUF12hvrQugXueplPvvtkkXQS6Yno6fYKiWl7wPE5VNmvvxAWvnBPMIirjtuMds9RQ8oT0U7wSpAqmLrI9fnmX1Ft1NYNW9oybo5ECbAwOZUTEV3b1NZlrRb',
                backend: 'apple-id',
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
