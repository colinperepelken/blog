import OpenAPIClientAxios, { Document } from 'openapi-client-axios'
import oasFile from '../../oas/Blog.json'
import { Client as ApiClient } from './ApiClient'

export class ApiClientBuilder {
    public static async build(): Promise<ApiClient> {
        const api = new OpenAPIClientAxios({
            definition: oasFile as Document,
        })
        api.init()
        const client = await api.getClient<ApiClient>()

        return client
    }
}
