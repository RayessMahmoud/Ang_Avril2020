import { StatesClient } from '../enums/states-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  name: string;
  email: string;
  state = StatesClient.ACTIF;
  constructor(param?: Partial<Client>){
    if(param){
      Object.assign(this, param)
    }
  }
}
