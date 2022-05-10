import { ScoreGenerate } from './score-generator'
import { AddClientModel } from '../../../domain/useCases/add-client'
import { ScoreRule } from '../../../score/protocols/score-rule'

interface SubTypes {
  sut: ScoreGenerate
  scoreRuleStub: ScoreRule
}

const makeScoreRule = (): ScoreRule => {
  class ScoreStub implements ScoreRule {
    generate (client: AddClientModel): number {
      return 1
    }
  }
  return new ScoreStub()
}

const makeSut = (): SubTypes => {
  const scoreRuleStub = makeScoreRule()

  const sut = new ScoreGenerate().addRule(scoreRuleStub).addRule(scoreRuleStub)

  return { sut, scoreRuleStub }
}

describe('Score Generator', () => {
  test('Should call ScoreGenerate with Rule added and returns', async () => {
    const { sut, scoreRuleStub } = makeSut()
    const scoreGenerateSpy = jest.spyOn(scoreRuleStub, 'generate')
    const score = await sut.generate({ name: 'any_name', monthlyIncome: 100, dependents: [] })
    expect(scoreGenerateSpy).toHaveLastReturnedWith(1)
    expect(score).toBe(2)
  })

  test('should call ScoreRule with correct values', async () => {
    const { sut, scoreRuleStub } = makeSut()
    const data = { name: 'any_name', monthlyIncome: 100, dependents: [] }
    const scoreGenerateSpy = jest.spyOn(scoreRuleStub, 'generate')
    await sut.generate(data)
    expect(scoreGenerateSpy).toHaveBeenCalledWith(data)
  })
})
