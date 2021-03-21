import { PROMO_CODE_LOADED_SUCCESSFULLY, CLEAR_PROMO_CODES } from "../_actions/promo-code.actions";
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
        default:
            break;
    }
    return state
}

export default promoCodeReducer