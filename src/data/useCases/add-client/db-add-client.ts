import { AddClient, AddClientModel } from '../../../domain/useCases/add-client'
import { AddClientRepo } from '../../protocols/db/add-client-repo'
import { Score } from '../../protocols/score/score'

export class DbAddClient implements AddClient {
  constructor (
    private readonly addClientRepo: AddClientRepo,
    private readonly scoreGenerate: Score
  ) {}

  async add (client: AddClientModel): Promise<void> {
    const score = await this.scoreGenerate.generate(client)
    await this.addClientRepo.add(client, score)
  }
}
