import { ListClientsController } from './listClient'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { mockClientModels } from '../../../../domain/test/mock-client'
import { ListClientsSpy } from '../../../test/mock-client'
import MockDate from 'mockdate'

interface SutTypes {
  listClientSpy: ListClientsSpy
  sut: ListClientsController
}

const makeSut = (): SutTypes => {
  const listClientSpy = new ListClientsSpy()
  const sut = new ListClientsController(listClientSpy)
  return { sut, listClientSpy }
}

describe('List client', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('should call list client', async () => {
    const { sut, listClientSpy } = makeSut()
    const listSpy = jest.spyOn(listClientSpy, 'list')
    await sut.handle({})
    expect(listSpy).toHaveBeenCalled()
  })
  test('should return a list of clients on success', async () => {
    const { sut } = makeSut()
    const result = await sut.handle({})
    expect(result).toEqual(ok(mockClientModels()))
  })
  test('should return 500 if listClient fails', async () => {
    const { sut, listClientSpy } = makeSut()
    jest.spyOn(listClientSpy, 'list').mockImplementationOnce(() => {
      throw new Error()
    })

    const res = await sut.handle({})
    expect(res).toEqual(serverError(new Error()))
  })
})
