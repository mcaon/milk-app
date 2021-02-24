import {ForecastResultModel} from './forecast-result.model';

export class ForecastModel {
  constructor(
    public results: ForecastResultModel,
    public id?: number,
    public valid_key?: boolean,
    public execution_time?: number,
    public from_cache?: boolean,
  ) {
  }
}
