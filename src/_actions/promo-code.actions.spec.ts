import * as promoCodeActions from './promo-code.actions'
import { PromoCode } from "../_constants/promo-code.interface"

const testPromoCode = {
	id: 1,
	serviceName: 'PromoService.com',
	description: 'some description',
	code: 'FE86XR3',
	status: "pending"
} as PromoCode

describe('load promo code successfully action test', () => {
	it('should return loaded promo codes', () => {
		const promoCodes = [
			testPromoCode
		] as PromoCode[]
		const expectedAction = {
			type: promoCodeActions.PROMO_CODE_LOADED_SUCCESSFULLY,
			payload: { promoCodes }
		}
		expect(promoCodeActions.promoCodeLoadedSuccessfully(promoCodes)).toEqual(expectedAction)
	})
})

describe('update promo code status action test', () => {
	it('should update promo code status as given status', () => {
		const promoCodeId = 1;
		const newStatus = "active"
		const expectedAction = {
			type: promoCodeActions.UPDATE_PROMO_CODE_STATUS,
			payload: {
				id: promoCodeId,
				status: newStatus
			}
		}
		expect(promoCodeActions.updatePromoCodeStatus(promoCodeId, newStatus)).toEqual(expectedAction)
	})
})

describe('clear promo code action test', () => {
	it('should empty promo codes', () => {
		const expectedAction = {
			type: promoCodeActions.CLEAR_PROMO_CODES,
			payload: {}
		}
		expect(promoCodeActions.clearPromoCodes()).toEqual(expectedAction)
	})
})