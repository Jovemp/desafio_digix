import { ClientModel } from '../models/client'

export interface ListClient {
  list(): Promise<ClientModel[]>
}
