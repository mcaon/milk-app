import {all} from 'redux-saga/effects';
import {exampleSagas} from './example';

export default function* rootSaga() {
  yield all([
    ...exampleSagas,
  ]);
}
