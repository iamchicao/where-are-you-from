import { call, put, all } from 'redux-saga/effects';
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
    data[0].currencies = data[0].currencies[0].name;
    data[0].languages = data[0].languages.map(lang => lang.name);
    data[0].languages = data[0].languages.join();
    let borders = yield all(
      data[0].borders.map(border => {
        return call(api.get, `alpha/${border}?fields=name`);
      })
    );
    borders = borders.map(border => border.data.name);
    data[0].borders = borders;
    yield put(DetailsCreators.getDetailsSuccess(data[0]));
  } catch (err) {
    toast.error('No country found', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
