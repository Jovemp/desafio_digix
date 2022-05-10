import app from '../config/app'
import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'

let clientCollections: Collection

describe('Client Routes', () => {
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
  describe('POST client', () => {
    test('should return 204 with data valid', async () => {
      await request(app)
        .post('/api/clients')
        .send({
          name: 'any-name',
          monthlyIncome: 100,
          dependents: [{
            name: 'any_name',
            birthDate: new Date()
          }]
        })
        .expect(204)
    })
  })
  describe('GET Clients', () => {
    test('should return 200 if data valid provided', async () => {
      await request(app)
        .get('/api/clients')
        .expect(200)
    })
  })
})
