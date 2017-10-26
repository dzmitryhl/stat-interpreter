import {Detail} from "./detail";
export class Match {
  constructor(
    public id: number,
    public sportName: string,
    public location: string,
    public championship: string,
    public homeTeam: string,
    public awayTeam: string,
    public plannedKickoffDate: number,
    public actualKickoffDate: number,
    public initiallyCompleted: boolean,
    public scoreConfirmed: boolean,
    public details: Array<Detail>
  ) {}
}
