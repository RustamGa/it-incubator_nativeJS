import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';
import {IGlobalState} from "./state";


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    // @ts-ignore
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return  {
                ...state,
                //@ts-ignore
                ...action.payload,
            }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                //@ts-ignore
                ...action.payload,
                //зануляем чтобы не было проблем с пересчетом
                amountOfBYN:'',
                amountOfCurrency:''
            }
        // case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
        //     return {
        //         ...state,
        //         ...action.payload,
        //         //зануляем чтобы не было проблем с пересчетом
        //         amountOfBYN:'',
        //         amountOfCurrency:''
        //     }


        default:
            return state;
    }
};
// select функция которая на входе принимает весь store, и отдает state
export const selectCurrenciesState=(store:IGlobalState)=> store.currency;

