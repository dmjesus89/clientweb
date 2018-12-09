import { RiskDTO } from './risk-dto';

export class ClientDTO {
  id: number;
  name: string;
  creditLimit: number;
  riskDTO: RiskDTO;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
