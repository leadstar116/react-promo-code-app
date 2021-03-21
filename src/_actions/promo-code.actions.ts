import { PromoCode } from "../_constants/promo-code.interface"

export const PROMO_CODE_LOADED_SUCCESSFULLY = "PROMO_CODE_LOADED_SUCCESSFULLY"
export const promoCodeLoadedSuccessfully = (promoCodes: Array<PromoCode>) => ({
    type: PROMO_CODE_LOADED_SUCCESSFULLY,
    payload: { promoCodes }
})

export const CLEAR_PROMO_CODES = "CLEAR_PROMO_CODES"
export const clearPromoCodes = () => ({
    type: CLEAR_PROMO_CODES,
    payload: { }
})