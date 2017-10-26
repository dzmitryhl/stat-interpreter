import { Match } from './match';

export class Forecast {
  constructor(
    public coefficient: number,
    public minute: number,
    public betSum: number,
    public isCompleted: boolean,
    public isWinning: boolean,
    public match: Match
  ) {}
}
