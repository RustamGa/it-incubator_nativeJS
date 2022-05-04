import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType, selectCurrenciesState} from '../../redux/currencyReducer';
import {Dispatch} from 'redux';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    СhangeCurrentCurrencyAC,
    CurrencyReducersTypes
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';

const CurrencyEContainer: React.FC = () => {
// способ оформления деструктуризации пропсов внутри компоненты
//     const {
//         currencies,
//         currentCurrency,
//         isBuying,
//         amountOfBYN,
//         amountOfCurrency,
//         // setCurrencyAmount,
//         // setAction,
//         // changeCurrency,
//         // ChangeActionAC,
//         // ChangeCurrencyFieldAC,
//         // СhangeCurrentCurrencyAC,
//     } = props;

    const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>(); // hook dispatch принимает в себя action  прокидывает его в reducer,
// и дальше идет обновление стейта, dispatch некий связующий элемент, который  позволяет из страницы внести изменения
// в стейт
    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        // setCurrencyAmount,
        // setAction,
        // changeCurrency,
        // ChangeActionAC,
        // ChangeCurrencyFieldAC,
        // СhangeCurrentCurrencyAC,
    } = useSelector(selectCurrenciesState);

    //
    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => { // функция обработчик которая повешена на инпунты
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return; // isFinite встроенна функция джаваскрипт, которая делает проверку является ли переданное значение конечным,
        // т.е. можно ли его перевести к числу с которым можно производить какие либо арифметические действия,
        // в нашем случае нужна для того чтоб пользователь не мог ввести буквы в поле ввода
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(СhangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    };
    return (
        <React.Fragment>
            <CurrencyExchange //презентационная компонента
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};
// типизация деструктуризацией- {currency} - Это приходящий стейт, { currency: CurrencyState }-достаем ветку currency
// и типизируем ее CurrencyState

// const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
//     return {
//         currencies: currency.currencies,
//         currentCurrency: currency.currentCurrency,
//         isBuying: currency.isBuying,
//         amountOfBYN: currency.amountOfBYN,
//         amountOfCurrency: currency.amountOfCurrency,
//     };
// };

// @ts-ignore
// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>): any => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(ChangeActionAC(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(СhangeCurrentCurrencyAC(currency));
//         },
//     };
// };

// const connector = connect(mapStateToProps, {});

// const connector = connect(mapStateToProps, {ChangeActionAC,
//     ChangeCurrencyFieldAC,
//     СhangeCurrentCurrencyAC,}); // сохраняем функцию которая возвращается от коннекта
// в отдельную переменную и методом ConnectedProps(предоставляет библиотека react-redux) забираем типы с этой функции
// type TProps = ConnectedProps<typeof connector>; // через стандартную тайпскриптовую штуку получаем типизацию всего компонета
//
// export default connector(CurrencyEContainer);

export default CurrencyEContainer;
