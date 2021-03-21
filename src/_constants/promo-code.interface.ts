export interface PromoCodeState {
    promoCodes: PromoCode[]
}
export interface PromoCode {
    serviceName: string,
    description: string,
    code: string,
    status?: string
}
