import { AddClientModel } from '../../domain/useCases/add-client'

export interface ScoreRule {
  generate: (client: AddClientModel) => number
}
