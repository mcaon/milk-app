
export class ForecastDayModel {
  constructor(
    public id?: number,
    public date?: string,
    public weekday?: string,
    public max?: number,
    public min?: number,
    public description?: string,
    public condition?: string
  ) {
  }
}
