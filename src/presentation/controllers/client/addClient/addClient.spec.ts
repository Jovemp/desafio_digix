import { AddClientController } from './addClient'
import { HttpRequest } from '../../../protocols/http'
import { serverError, noContent } from '../../../helpers/http/http-helper'
import { AddClientSpy } from '../../../test/mock-client'
import MockDate from 'mockdate'

interface SutTypes {
  sut: AddClientController
  addClientSpy: AddClientSpy
}

const makeSut = (): SutTypes => {
  const addClientSpy = new AddClientSpy()
  const sut = new AddClientController(addClientSpy)

  return { sut, addClientSpy }
}

const makeFakeRequest = (): HttpRequest => {
  return {
    body: {
      name: 'any_name',
      monthlyIncome: 100,
      dependents: [{
        name: 'any_name',
        birthDate: new Date()
      }]
    }
  }
}

describe('AddClient controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('should call addClient with correct values', async () => {
    const { sut, addClientSpy } = makeSut()
    const addSpy = jest.spyOn(addClientSpy, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })
  test('should return 204 on success', async () => {
    const { sut } = makeSut()

    const httpRequest = makeFakeRequest()
    const res = await sut.handle(httpRequest)
    expect(res).toEqual(noContent())
  })
})
