import { RuleIncome } from './rule-income'

describe('Rule Income Score', () => {
  test('Should return 5 score for income less than 900', () => {
    const sut = new RuleIncome()
    const score = sut.generate({ name: 'any-name', monthlyIncome: (Math.random() * (899 - 1) + 1), dependents: [] })
    expect(score).toBe(5)
  })
  test('Should return 5 score for income equal to 900', () => {
    const sut = new RuleIncome()
    const score = sut.generate({ name: 'any-name', monthlyIncome: 900, dependents: [] })
    expect(score).toBe(5)
  })
  test('Should return 3 score for income less than 1500', () => {
    const sut = new RuleIncome()
    const score = sut.generate({ name: 'any-name', monthlyIncome: (Math.random() * (1499 - 901) + 901), dependents: [] })
    expect(score).toBe(3)
  })
  test('Should return 3 score for income equal to 1500', () => {
    const sut = new RuleIncome()
    const score = sut.generate({ name: 'any-name', monthlyIncome: 1500, dependents: [] })
    expect(score).toBe(3)
  })
  test('Should return 0 score for income greater than 1500', () => {
    const sut = new RuleIncome()
    const score = sut.generate({ name: 'any-name', monthlyIncome: (Math.random() * (99999999 - 1501) + 1501), dependents: [] })
    expect(score).toBe(0)
  })
})
