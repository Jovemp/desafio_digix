import { Controller } from '../../../presentation/protocols/controller'
import { ListClientsController } from '../../../presentation/controllers/client/listClients/listClient'
import { makeListClient } from '../useCases/dbListClient'
import { LogMongoRepo } from '../../../infra/db/mongodb/logRepo/log'
import { LogControllerDecorator } from '../../decorators/log'

export const makeListClientController = (): Controller => {
  const listClientController = new ListClientsController(makeListClient())
  const logMongoRepo = new LogMongoRepo()
  return new LogControllerDecorator(listClientController, logMongoRepo)
}
