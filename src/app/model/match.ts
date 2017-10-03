export class Match {
  constructor(
    public id: number,
    public sportName: string,
    public homeTeam: string,
    public awayTeam: string,
    public location: string,
    public championship: string,
    public initiallyCompleted: boolean
  ) {}
}
