import { AddClientModel } from '../../domain/useCases/add-client'
import { ScoreRule } from '../protocols/score-rule'
import { addYears } from 'date-fns'

export class RuleNumberDependent implements ScoreRule {
  generate (client: AddClientModel): number {
    const dateGreaterAge = addYears(new Date(), -18)
    const numberDependents = client.dependents.filter(dependent => new Date(dependent.birthDate) > dateGreaterAge).length
    return numberDependents >= 3 ? 3 : numberDependents > 0 ? 2 : 0
  }
}
