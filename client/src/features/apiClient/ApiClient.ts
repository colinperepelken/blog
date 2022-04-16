import axios, { AxiosRequestConfig } from 'axios'
import { config as clientConfig } from 'src/config'

export class ApiClient {
    public axiosInstance

    constructor(config?: AxiosRequestConfig) {
        this.axiosInstance = axios.create({
            baseURL: clientConfig.apiHost,
            ...config,
        })
    }

    public listArticles() {
        return this.axiosInstance.get('/article')
    }
}
