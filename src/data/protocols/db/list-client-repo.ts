import { ClientModel } from '../../../domain/models/client'

export interface listClientsRepo{
  list(): Promise<ClientModel[]>
}
