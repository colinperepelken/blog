import OpenAPIClientAxios, { Document } from 'openapi-client-axios'
import { config } from 'src/config'
import oasFile from '../../oas/Blog.json'
import { Client as ApiClient } from './ApiClient'

export class ApiClientBuilder {
    public static async build(): Promise<ApiClient> {
        const api = new OpenAPIClientAxios({
            definition: oasFile as Document,
            axiosConfigDefaults: { baseURL: config.apiHost },
        })
        api.init()
        const client = await api.getClient<ApiClient>()

        return client
    }
}
