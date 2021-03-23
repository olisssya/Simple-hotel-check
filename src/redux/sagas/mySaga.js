import { call, put, takeEvery, all } from "redux-saga/effects";
import moment from "moment";
import { initAC, errorAC,searchAC } from "../actionCreators";
import { INIT_FETCH, SEARCH_FETCH } from "../actionTypes";

const initFetch = async () => {
  const result = await fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=${moment().format(
      "YYYY-MM-DD"
    )}&checkOut=${moment().add(1, "d").format("YYYY-MM-DD")}&limit=10`
  );
  try {
    const data = await result.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const searchFetch = async (payload) => {

  const result = await fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${
      payload.location
    }&currency=rub&checkIn=${moment(payload.startDate).format(
      "YYYY-MM-DD"
    )}&checkOut=${moment(payload.startDate).add('days', payload.endDate).format("YYYY-MM-DD")}&limit=10`
  );
  try {
    const data = await result.json();
    return {data,startDate:payload.startDate,endDate:payload.endDate,location:payload.location};
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
function* searchWorker(action) {
  try {
    const data = yield call(searchFetch, action.payload);
    yield put(searchAC(data));
  } catch (error) {
    yield put(errorAC(error.message));
  }
}

function* watcher() {
  yield all([
    yield takeEvery(INIT_FETCH, initWorker),
    yield takeEvery(SEARCH_FETCH, searchWorker),
  ]);
}

export default watcher;
