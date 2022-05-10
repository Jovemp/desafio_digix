export interface ClientModel{
  id: string
  name: string
  monthlyIncome: number
  dependents: Dependent[]
  score: number
}

export interface Dependent {
  name?: string
  birthDate: Date
}
