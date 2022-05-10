import { AddClientRepo } from '../protocols/db/add-client-repo'
import { AddClientModel } from '../../domain/useCases/add-client'
import { ClientModel } from '../../domain/models/client'
import { mockClientModels } from '../../domain/test/mock-client'
import { listClientsRepo } from '../protocols/db/list-client-repo'

export class AddClientRepoSpy implements AddClientRepo {
  async add (client: AddClientModel, score: number): Promise<void> {
    return Promise.resolve()
  }
}

export class ListClientRepoSpy implements listClientsRepo {
  async list (): Promise<ClientModel[]> {
    return Promise.resolve(mockClientModels())
  }
}
