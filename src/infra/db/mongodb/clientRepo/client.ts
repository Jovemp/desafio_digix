import { AddClientRepo } from '../../../../data/protocols/db/add-client-repo'
import { ClientModel } from '../../../../domain/models/client'
import { AddClientModel } from '../../../../domain/useCases/add-client'
import { MongoHelper } from '../helpers/mongo-helper'

export class ClientRepo implements AddClientRepo {
  async add (client: AddClientModel, score: number): Promise<void> {
    const clientCollections = await MongoHelper.getCollection('clients')
    await clientCollections.insertOne({ ...client, score })
  }

  async list (): Promise<ClientModel[]> {
    const clientCollections = await MongoHelper.getCollection('clients')
    var sort = { score: 1 }
    const results = await clientCollections.find().sort(sort).toArray()

    const clients = results.map(result => MongoHelper.map(result))
    return clients
  }
}
