import { DbListClient } from '../../../data/useCases/list-client/db-list-clients'
import { ClientRepo } from '../../../infra/db/mongodb/clientRepo/client'
import { ListClient } from '../../../domain/useCases/list-client'

export const makeListClient = (): ListClient => {
  const clientRepo = new ClientRepo()
  const listClient = new DbListClient(clientRepo)
  return listClient
}
