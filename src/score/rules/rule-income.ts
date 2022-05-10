import { AddClientModel } from '../../domain/useCases/add-client'
import { ScoreRule } from '../protocols/score-rule'

export class RuleIncome implements ScoreRule {
  generate (client: AddClientModel): number {
    return client.monthlyIncome <= 900 ? 5 : client.monthlyIncome <= 1500 ? 3 : 0
  }
}
