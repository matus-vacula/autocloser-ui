import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ZONES } from './constants';
import { getZones } from './apis';
import { loadZonesError, loadZonesSuccess } from './actions';

export function* loadZones() {
  try {
    const zones = yield call(getZones);
    yield put(loadZonesSuccess(zones));
  } catch (err) {
    yield put(loadZonesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* rootSaga() {
  yield takeLatest(LOAD_ZONES, loadZones);
}

// Bootstrap sagas
export default [
  rootSaga,
];
