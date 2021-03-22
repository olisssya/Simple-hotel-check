import { call, put, takeEvery, all } from "redux-saga/effects";
import moment from 'moment'
import {initAC,errorAC} from '../actionCreators'
import {INIT_FETCH} from '../actionTypes'

const initFetch = async () => {
    const result = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=${moment().format("YYYY-MM-DD")}&checkOut=${moment().add(1, 'd').format("YYYY-MM-DD")}&limit=3`);
    try {
      const data = await result.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

function* initWorker() {
    try {
      const hotels = yield call(initFetch);
      yield put(initAC(hotels));
    } catch (error) {
      yield put(errorAC(error.message));
    }
  }


function* watcher() {
    yield all([
        yield takeEvery(INIT_FETCH, initWorker),
    ]);
}

export default watcher;