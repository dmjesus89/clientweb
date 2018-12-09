export class RiskDTO {
  id: number;
  name: string;
  chargesRate: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
