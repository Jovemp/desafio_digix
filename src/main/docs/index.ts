import { clientPath } from './paths/client-path'
import { clientParamsSchema } from './schemas/client-params-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node Digix API',
    description: 'APi do teste da Digix',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Client'
  }],
  paths: {
    '/clients': clientPath
  },
  schemas: {
    clientParams: clientParamsSchema
  }
}
