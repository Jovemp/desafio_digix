import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { AddClientModel } from '../../../../domain/useCases/add-client'
import { ClientRepo } from './client'

const makeFakeData = (): AddClientModel => {
  return {
    name: 'any_name',
    monthlyIncome: 100,
    dependents: [{
      name: 'any_name',
      birthDate: new Date()
    }]
  }
}

describe('Client Repo', () => {
  let clientCollections: Collection
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    clientCollections = await MongoHelper.getCollection('clients')
    await clientCollections.deleteMany({})
  })
  test('should create a client ', async () => {
    const sut = new ClientRepo()
    await sut.add(makeFakeData(), 1)
    const count = await clientCollections.countDocuments()
    expect(count).toBe(1)
  })
  test('should return all the client in DB', async () => {
    const sut = new ClientRepo()
    await sut.add(makeFakeData(), 1)
    await sut.add(makeFakeData(), 2)
    const clients = await sut.list()
    expect(clients.length).toBe(2)
  })
  test('should return a empty array of theres no data in DB', async () => {
    const sut = new ClientRepo()
    const clients = await sut.list()
    expect(clients.length).toBe(0)
  })
})
