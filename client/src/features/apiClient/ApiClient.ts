import axios, { AxiosInstance } from 'axios'
import { ArticleResource } from './resources/ArticleResource'
import { Resource } from './resources/Resource'

export class ApiClient {
    private readonly agent: AxiosInstance

    // Resources
    public articles: ArticleResource

    constructor() {
        this.agent = axios.create()
        this.articles = new Resource('articles', this.agent)
    }
}
