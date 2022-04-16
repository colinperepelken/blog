import { IArticleDetails } from '@blog/shared-types'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { config as clientConfig } from 'src/config'

export class ApiClient {
    private axiosInstance: AxiosInstance

    constructor(config?: AxiosRequestConfig) {
        this.axiosInstance = axios.create({
            baseURL: clientConfig.apiHost,
            ...config,
        })
    }

    public async listArticles(): Promise<IArticleDetails[]> {
        return (await this.axiosInstance.get('/article')).data
    }

    public async getArticle(id: string): Promise<IArticleDetails> {
        return (await this.axiosInstance.get(`/article/${id}`)).data
    }
}
