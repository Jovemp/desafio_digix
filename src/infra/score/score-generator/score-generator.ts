import { Score } from '../../../data/protocols/score/score'
import { AddClientModel } from '../../../domain/useCases/add-client'
import { ScoreRule } from '../../../score/protocols/score-rule'

export class ScoreGenerate implements Score {
  rules: ScoreRule[]

  constructor () {
    this.rules = []
  }

  addRule (rule: ScoreRule): ScoreGenerate {
    this.rules.push(rule)
    return this
  }

  async generate (client: AddClientModel): Promise<number> {
    let score: number = 0
    for (let i = 0; i < this.rules.length; i++) {
      score += this.rules[i].generate(client)
    }
    return score
  }
}
