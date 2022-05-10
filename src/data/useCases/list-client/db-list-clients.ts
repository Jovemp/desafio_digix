import { ListClient } from '../../../domain/useCases/list-client'
import { ClientModel } from '../../../domain/models/client'
import { listClientsRepo } from '../../protocols/db/list-client-repo'

export class DbListClient implements ListClient {
  constructor (private readonly listClientsRepo: listClientsRepo) {}
  async list (): Promise<ClientModel[]> {
    const clients = await this.listClientsRepo.list()
    return clients.sort((a, b) => a.score - b.score)
  }
}
