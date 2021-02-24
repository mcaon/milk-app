import {all} from 'redux-saga/effects';
import {exampleSagas} from './example';
import {weatherSagas} from './weather';
import {userSagas} from './user';

export default function* rootSaga() {
  yield all([
    ...exampleSagas,
    ...weatherSagas,
    ...userSagas
  ]);
}
