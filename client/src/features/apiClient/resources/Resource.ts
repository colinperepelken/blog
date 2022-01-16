import { AxiosInstance, AxiosResponse } from 'axios'

export class Resource<Response> {
    constructor(
        private readonly basePath: string,
        private readonly agent: AxiosInstance,
    ) {}

    public async get(id: string): Promise<Response> {
        return this.sendRequest(this.agent.get(`${this.basePath}/${id}`))
    }

    public async list(): Promise<Response[]> {
        return this.sendRequest(this.agent.get(this.basePath))
    }

    public async post(body: any): Promise<Response> {
        return this.sendRequest(this.agent.post(this.basePath, body))
    }

    public async patch(id: string, body: any): Promise<Response> {
        return this.sendRequest(
            this.agent.patch(`${this.basePath}/${id}`, body),
        )
    }

    public async delete(id: string): Promise<Response> {
        return this.sendRequest(this.agent.delete(`${this.basePath}/${id}`))
    }

    private async sendRequest(request: Promise<AxiosResponse>) {
        const res = await request
        return res.data
    }
}
