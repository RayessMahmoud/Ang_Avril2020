import { StatesClient } from '../enums/states-client.enum';

export interface ClientI {
  id: number;
  name: string;
  email: string;
  state: StatesClient;
}
