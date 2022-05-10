import { RuleNumberDependent } from './rule-number-dependent'
import { addYears } from 'date-fns'

describe('Rule Number Dependent Score', () => {
  test('Should return 0 points for when there are no dependents', () => {
    const sut = new RuleNumberDependent()
    const score = sut.generate({ name: 'any-name', monthlyIncome: 0, dependents: [] })
    expect(score).toBe(0)
  })
  test('Should return 0 points for when all dependents are of legal age', () => {
    const sut = new RuleNumberDependent()
    const score = sut.generate({
      name: 'any-name',
      monthlyIncome: 0,
      dependents: [
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (100 - 18) + 18) * -1) },
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (100 - 18) + 18) * -1) }
      ]
    })
    expect(score).toBe(0)
  })
  test('Should return 2 points for when you have 1 underage dependent', () => {
    const sut = new RuleNumberDependent()
    const score = sut.generate({
      name: 'any-name',
      monthlyIncome: 0,
      dependents: [
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (100 - 18) + 18) * -1) },
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (17 - 0) + 0) * -1) }
      ]
    })
    expect(score).toBe(2)
  })
  test('Should return 2 points for when you have 2 underage dependent', () => {
    const sut = new RuleNumberDependent()
    const score = sut.generate({
      name: 'any-name',
      monthlyIncome: 0,
      dependents: [
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (17 - 0) + 0) * -1) },
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (17 - 0) + 0) * -1) }
      ]
    })
    expect(score).toBe(2)
  })
  test('Should return 3 points for when you have 3 or more underage dependents', () => {
    const sut = new RuleNumberDependent()
    const score = sut.generate({
      name: 'any-name',
      monthlyIncome: 0,
      dependents: [
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (17 - 0) + 0) * -1) },
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (17 - 0) + 0) * -1) },
        { name: 'any-name', birthDate: addYears(new Date(), (Math.random() * (17 - 0) + 0) * -1) }
      ]
    })
    expect(score).toBe(3)
  })
})
