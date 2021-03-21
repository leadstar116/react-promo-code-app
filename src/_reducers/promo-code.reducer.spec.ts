import { PromoCode } from "../_constants/promo-code.interface"
import usersReducer from './promo-code.reducer'
import * as promoCodeActions from '../_actions/promo-code.actions'

describe('users reducer test', () => {
    let initialState = {
        promoCodes: [] as PromoCode[]
    };

    const testPromoCode = {
		id: 1,
		serviceName: 'PromoService.com',
		description: 'some description',
		code: 'FE86XR3',
		status: "pending"
	} as PromoCode;


    test('PROMO_CODE_LOADED_SUCCESSFULLY: should set loaded promo codes to the state', () => {
        const promoCodes = [ testPromoCode ]
        const expectedState = {
            promoCodes: [ testPromoCode ]
        }
        const action = {
            type: promoCodeActions.PROMO_CODE_LOADED_SUCCESSFULLY,
            payload: { promoCodes }
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    });

    test('UPDATE_PROMO_CODE_STATUS: should find promo code by id and update status', () => {
            const initialState = {
                promoCodes: [ testPromoCode ]
            }
            const updatedPromoCode = {
                id: 1,
                serviceName: 'PromoService.com',
                description: 'some description',
                code: 'FE86XR3',
                status: "active"
            } as PromoCode
            const expectedState = {
                promoCodes: [ updatedPromoCode ]
            }
            const action = {
                type: promoCodeActions.UPDATE_PROMO_CODE_STATUS,
                payload: {
                    id: 1,
                    status: "active"
                }
            }
            const newState = usersReducer(initialState, action)
            expect(newState).toEqual(expectedState)
    });

    test('CLEAR_PROMO_CODES: should set promo codes to empty', () => {
        initialState = {
            promoCodes: [ testPromoCode ]
        }
        const expectedState = {
            promoCodes: []
        }
        const action = {
            type: promoCodeActions.CLEAR_PROMO_CODES,
            payload: {}
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    });
})