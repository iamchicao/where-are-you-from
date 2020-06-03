import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as DetailsCreators } from '../ducks/details';

export function* getDetails(action) {
  try {
    const { name } = action.payload;
    const { data } = yield call(
      api.get,
      `name/${name}?fields=name;flag;region;capital;population;nativeName;subregion;topLevelDomain;currencies;languages;borders`
    );
    toast.success('Country found', {
      position: toast.POSITION.TOP_RIGHT,
    });
    data[0].currencies = data[0].currencies[0].name;
    data[0].languages = data[0].languages.map(lang => lang.name);
    data[0].languages = data[0].languages.join();
    yield put(DetailsCreators.getDetailsSuccess(data[0]));
  } catch (err) {
    toast.error('No countries found', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
