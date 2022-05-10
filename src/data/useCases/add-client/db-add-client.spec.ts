import { DbAddClient } from './db-add-client'
import { AddClientRepoSpy } from '../../test/mock-db-client'
import { ScoreGenerateSpy } from '../../test/mock-score'
import { mockClientData } from '../../../domain/test/mock-client'
import MockDate from 'mockdate'

interface SutTypes {
  sut: DbAddClient
  addClientSpy: AddClientRepoSpy
  scoreGenerateSpy: ScoreGenerateSpy
}

const makeSut = (): SutTypes => {
  const addClientSpy = new AddClientRepoSpy()
  const scoreGenerateSpy = new ScoreGenerateSpy()
  const sut = new DbAddClient(addClientSpy, scoreGenerateSpy)

  return { sut, addClientSpy, scoreGenerateSpy }
}

describe('DbAddClient useCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('should call AddClientRepo with correct values', async () => {
    const { sut, addClientSpy, scoreGenerateSpy } = makeSut()
    const addSpy = jest.spyOn(addClientSpy, 'add')
    const data = mockClientData()
    await sut.add(data)
    const score = await scoreGenerateSpy.generate(data)
    expect(addSpy).toHaveBeenCalledWith(data, score)
  })
  test('should throw if AddClientRepo throws', async () => {
    const { sut, addClientSpy } = makeSut()
    jest.spyOn(addClientSpy, 'add').mockReturnValueOnce(Promise.reject(new Error()))
    const error = sut.add(mockClientData())
    await expect(error).rejects.toThrow()
  })
})
