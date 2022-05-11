import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { ListClient } from '../../../../domain/useCases/list-client'

export class ListClientsController implements Controller {
  constructor (private readonly listClients: ListClient) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const clients = await this.listClients.list()
    return Promise.resolve(ok(clients))
  }
}
