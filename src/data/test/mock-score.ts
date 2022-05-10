import { Score } from '../protocols/score/score'
import { AddClientModel } from '../../domain/useCases/add-client'

export class ScoreGenerateSpy implements Score {
  async generate (client: AddClientModel): Promise<number> {
    return Promise.resolve(1)
  }
}
