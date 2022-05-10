import { ClientModel } from '../models/client'
import { AddClientModel } from '../useCases/add-client'

export const mockClientModel = (score: number): ClientModel => {
  return {
    id: 'any_id',
    name: 'any_name',
    monthlyIncome: 600,
    dependents: [
      {
        name: 'any_name',
        birthDate: new Date()
      }
    ],
    score
  }
}

export const mockClientModels = (): ClientModel[] => [
  mockClientModel(1),
  mockClientModel(2)
]

export const mockClientData = (): AddClientModel => {
  return {
    name: 'any_name',
    monthlyIncome: 600,
    dependents: [
      {
        name: 'any_name',
        birthDate: new Date()
      }
    ]
  }
}
