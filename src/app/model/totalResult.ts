import { PartialResult } from './partialResult';
export class TotalResult {
  constructor(
    public total: number,
    public numberOfBets: number,
    public partialResults: Array<PartialResult>
    ) {}
}
