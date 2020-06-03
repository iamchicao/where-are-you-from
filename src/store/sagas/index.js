import { all, takeLatest } from 'redux-saga/effects';
import { Types as CountriesTypes } from '../ducks/countries';
import { Types as DetailsTypes } from '../ducks/details';
import { getCountries } from './countries';
import { getDetails } from './details';

export default function* rootSaga() {
  yield all([
    takeLatest(CountriesTypes.GET_COUNTRIES_REQUEST, getCountries),
    takeLatest(DetailsTypes.GET_DETAILS_REQUEST, getDetails),
  ]);
}
