import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as CountriesCreators } from '../ducks/countries';

export function* getCountries(action) {
  try {
    const { name, filter } = action.payload;
    if (name === '' && filter === '') {
      const { data } = yield call(
        api.get,
        '/all?fields=name;flag;region;capital;population'
      );
      toast.success('Countries found', {
        position: toast.POSITION.TOP_RIGHT,
      });
      yield put(CountriesCreators.getCountriesSuccess(data));
    } else if (name === '') {
      const { data } = yield call(
        api.get,
        `/region/${filter}?fields=name;flag;region;capital;population`
      );
      toast.success('Countries found', {
        position: toast.POSITION.TOP_RIGHT,
      });
      yield put(CountriesCreators.getCountriesSuccess(data));
    } else if (filter === '') {
      const { data } = yield call(
        api.get,
        `name/${name}?fields=name;flag;region;capital;population`
      );
      toast.success('Countries found', {
        position: toast.POSITION.TOP_RIGHT,
      });
      yield put(CountriesCreators.getCountriesSuccess(data));
    }
  } catch (err) {
    toast.error('No countries found for these filters', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
