import { Dependent } from '../models/client'

export interface AddClientModel{
  name: string
  monthlyIncome: number
  dependents: Dependent[]
}

export interface AddClient {
  add(client: AddClientModel): Promise<void>
}
