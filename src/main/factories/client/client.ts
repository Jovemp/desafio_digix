import { Controller } from '../../../presentation/protocols/controller'
import { LogControllerDecorator } from '../../decorators/log'
import { AddClientController } from '../../../presentation/controllers/client/addClient/addClient'
import { makeAddClient } from '../useCases/dbAddClient'
import { LogMongoRepo } from '../../../infra/db/mongodb/logRepo/log'

export const makeClientController = (): Controller => {
  const addClientController = new AddClientController(makeAddClient())
  const logMongoRepo = new LogMongoRepo()
  return new LogControllerDecorator(addClientController, logMongoRepo)
}
