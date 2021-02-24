import {ForecastDayModel} from './forecast-day.model';

export class ForecastResultModel {
  constructor(
    public forecast: ForecastDayModel[],
    public id?: number,
    public temp?: number,
    public date?: string,
    public time?: string,
    public condition_code?: string,
    public description?: string,
    public currently?: string,
    public cid?: string,
    public city?: string,
    public img_id?: string,
    public humidity?: number,
    public wind_speedy?: string,
    public sunrise?: string,
    public sunset?: string,
    public condition_slug?: string,
    public city_name?: string,


  ) {
    this.forecast = [];
  }
}


