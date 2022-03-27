import { combineReducers, createStore } from "redux";
import { currencyReducer } from './currencyReducer';

const reducers = combineReducers({ //возвращает один большой редьюсер
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);