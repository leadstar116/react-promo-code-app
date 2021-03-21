import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { promoCodeLoadedSuccessfully } from '../_actions/promo-code.actions';
import { alertClear, alertFailure, alertLoading } from '../_actions/alert.actions';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const loadPromoCodes = (count = 10) => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(alertLoading('Loading...'));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count })
        };
        let response = await fetch(
            `http://localhost:3001/promo-code`,
            requestOptions
        );
        const result = await response.json();

        dispatch(promoCodeLoadedSuccessfully(result));
        dispatch(alertClear());
    } catch(e) {
        dispatch(alertFailure(e.toString()));
    }
}
