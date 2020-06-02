import { all, takeLatest } from 'redux-saga/effects';
import { getCountries } from './countries';
import { Types as CountriesTypes } from '../ducks/countries';

export default function* rootSaga() {
    yield all([takeLatest(CountriesTypes.GET_COUNTRIES_REQUEST, getCountries)]);
}