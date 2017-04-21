export class Forecast {
  constructor(public eventId: number, public competition: string, public location: string, public betSum: number, public coefficient: number, public minute: number, public winning: boolean, public completed: boolean) {}
}
