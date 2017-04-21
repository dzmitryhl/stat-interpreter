export class Detail {
  constructor(
    public id: number,
    public scoreTime: number,
    public score1: number,
    public score2: number,
    public nextGoal1Coef: number,
    public nextGoalXCoef: number,
    public nextGoal2Coef: number,
    public team1Scored: boolean,
    public team2Scored: boolean,
    public reconstructed: boolean) {}
}
