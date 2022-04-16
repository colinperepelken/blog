import { ApiClient } from './ApiClient'

export class ApiClientBuilder {
    public static build(): ApiClient {
        const client = new ApiClient()
        return client
    }
}
