import { IArticleDetails } from '@blog/shared-types'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Resource } from './resources/Resource'
import { config as clientConfig } from '../../config'

export class ApiClient {
    private readonly agent: AxiosInstance

    // Resources
    public articles: Resource<IArticleDetails>

    private constructor() {
        const config: AxiosRequestConfig = {
            baseURL: clientConfig.apiUrl,
        }

        this.agent = axios.create(config)
        this.articles = new Resource('articles', this.agent)
    }

    public static build() {
        return new ApiClient()
    }
}
