import { Controller } from '../../../protocols/controller'
import { noContent } from '../../../helpers/http/http-helper'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { AddClient, AddClientModel } from '../../../../domain/useCases/add-client'

export class AddClientController implements Controller {
  constructor (
    private readonly addClient: AddClient
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, monthlyIncome, dependents } = httpRequest.body
    const client: AddClientModel = { name, monthlyIncome, dependents }
    await this.addClient.add(client)

    return noContent()
  }
}
