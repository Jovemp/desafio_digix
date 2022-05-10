import { DbListClient } from './db-list-clients'
import { mockClientModels } from '../../../domain/test/mock-client'
import { ListClientRepoSpy } from '../../test/mock-db-client'
import MockDate from 'mockdate'

interface SutTypes {
  listClientRepoSpy: ListClientRepoSpy
  sut: DbListClient
}
const makeSut = (): SutTypes => {
  const listClientRepoSpy = new ListClientRepoSpy()
  const sut = new DbListClient(listClientRepoSpy)

  return { sut, listClientRepoSpy }
}
describe('DbListClient', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('should call listSurvey repo', async () => {
    const { listClientRepoSpy, sut } = makeSut()
    const listSpy = jest.spyOn(listClientRepoSpy, 'list')
    await sut.list()
    expect(listSpy).toHaveBeenCalled()
  })
  test('should return a list of client on success', async () => {
    const { sut } = makeSut()
    const result = await sut.list()
    expect(result).toEqual(mockClientModels())
  })
  test('should throw if listClient throws', async () => {
    const { sut, listClientRepoSpy } = makeSut()
    jest.spyOn(listClientRepoSpy, 'list').mockReturnValueOnce(Promise.reject(new Error()))
    const res = sut.list()
    await expect(res).rejects.toThrow()
  })
})
