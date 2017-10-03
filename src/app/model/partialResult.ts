import { Forecast } from './forecast';
export class PartialResult {
  constructor(
    public total: number,
    public numberOfBets: number,
    public forecasts: Array<Forecast>
    ) {}
}
