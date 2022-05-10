import { AddClient } from '../../../domain/useCases/add-client'
import { ClientRepo } from '../../../infra/db/mongodb/clientRepo/client'
import { DbAddClient } from '../../../data/useCases/add-client/db-add-client'
import { ScoreGenerate } from '../../../infra/score/score-generator/score-generator'
import { RuleIncome } from '../../../score/rules/rule-income'
import { RuleNumberDependent } from '../../../score/rules/rule-number-dependent'

export const makeAddClient = (): AddClient => {
  const clientRepo = new ClientRepo()
  const scoreGenerate = new ScoreGenerate()
    .addRule(new RuleIncome())
    .addRule(new RuleNumberDependent())
  const dbAddClient = new DbAddClient(clientRepo, scoreGenerate)

  return dbAddClient
}
