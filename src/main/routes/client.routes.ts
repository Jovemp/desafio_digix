import { Router } from 'express'
import { adapterRoute } from '../adapters/express-routes'
import { makeClientController } from '../factories/client/client'
import { makeListClientController } from '../factories/list-clients/list-clients'

export default (router: Router): void => {
  router.post('/clients', adapterRoute(makeClientController()))
  router.get('/clients', adapterRoute(makeListClientController()))
}
