import {call, put, select, takeLatest} from 'redux-saga/effects';
import {Creators, Types} from '../reducers/weather';
import {setSnackbarInfos} from '../../components/Snackbar/snackbarUtils';
import {getForecastByCityCoordinates} from '../../services/weather';

export function* setForecast() {
  try {
    const lat = yield select(state => state.weather.latitude);
    const long = yield select(state => state.weather.longitude);
    const params = {lat: lat.toString(), lon: long.toString(), user_ip: 'remote'}
    try {
      const forecast = yield call(getForecastByCityCoordinates, params);
      yield put(Creators.forecastSuccess(forecast.data));
      yield put(Creators.setLastUpdate(new Date()));
    } catch (e) {
      console.log('error setForecast')
      console.log(e)
      yield put(Creators.forecastFailed(e));
      const connected = yield select(state => state.user.connected);
      setSnackbarInfos(connected ? 'Erro ao Atualizar. Tente Novamente' : 'Erro ao Atualizar, utilizando últimos valores salvos.', true);
    }
  } catch (error) {
    setSnackbarInfos('Erro ao atualizar Previsão do Tempo', true);
    yield put(Creators.forecastFailed(null));
    console.log('Erro ao atualizar Previsão do Tempo');
    console.log(error.message, true);
  }
}

export const weatherSagas = [
  takeLatest(Types.FORECAST_REQUEST, setForecast)
];
