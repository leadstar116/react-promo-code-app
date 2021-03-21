import { AlertState } from "./alert.interface";
import { PromoCodeState } from "./promo-code.interface";

export interface initialState {
  promoCodeReducer: PromoCodeState,
  alertReducer: AlertState,
}