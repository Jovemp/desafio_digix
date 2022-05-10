import { ClientModel } from '../../domain/models/client'
import { mockClientModels } from '../../domain/test/mock-client'
import { AddClient, AddClientModel } from '../../domain/useCases/add-client'
import { ListClient } from '../../domain/useCases/list-client'

export class AddClientSpy implements AddClient {
  async add (survey: AddClientModel): Promise<void> {
    return Promise.resolve()
  }
}

export class ListClientsSpy implements ListClient {
  async list (): Promise<ClientModel[]> {
    return Promise.resolve(mockClientModels())
  }
}
