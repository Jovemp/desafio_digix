import { AddClientModel } from '../../../domain/useCases/add-client'

export interface Score {
  generate(client: AddClientModel): Promise<number>
}
