import { AddClientModel } from '../../../domain/useCases/add-client'

export interface AddClientRepo {
  add(client: AddClientModel, score: number): Promise<void>
}
