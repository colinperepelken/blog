import axios, { AxiosInstance } from 'axios'
import { Resource } from './resources/Resource'

export class ApiClient {
    private readonly agent: AxiosInstance

    // Resources
    public articles: Resource

    constructor() {
        this.agent = axios.create()
        this.articles = new Resource('articles', this.agent)
    }
}
