export abstract class AbstractController<T> {
    public async get(): Promise<T> {
        throw new Error('GET operation not available')
    }

    public async list(): Promise<T[]> {
        throw new Error('LIST operation not available')
    }

    public async update(): Promise<T> {
        throw new Error('UPDATE operation not available')
    }

    public async create(): Promise<T> {
        throw new Error('CREATE operation not available')
    }

    public async delete(): Promise<void> {
        throw new Error('DELETE operation not available')
    }

}