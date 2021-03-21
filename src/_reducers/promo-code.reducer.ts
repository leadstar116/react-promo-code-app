import { PROMO_CODE_LOADED_SUCCESSFULLY, CLEAR_PROMO_CODES, UPDATE_PROMO_CODE_STATUS } from "../_actions/promo-code.actions";
import { PromoCode } from "../_constants/promo-code.interface"

const promoCodeState = {
    promoCodes: [] as PromoCode[],
}

const promoCodeReducer = (state = promoCodeState, action: any) => {
    const {type, payload} = action

    switch (type) {
        case PROMO_CODE_LOADED_SUCCESSFULLY:
            return payload;
        case CLEAR_PROMO_CODES:
            return {
                promoCodes: []
            }
        case UPDATE_PROMO_CODE_STATUS:
            return {
                promoCodes: state.promoCodes.map((promoCode) => {
                    if (promoCode.id !== payload.id) return promoCode;
                    promoCode.status = payload.status;
                    return promoCode;
                })
            }
        default:
            break;
    }
    return state
}

export default promoCodeReducer