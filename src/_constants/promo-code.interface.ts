export interface PromoCodeState {
    promoCodes: PromoCode[]
}
export interface PromoCode {
    id: number,
    serviceName: string,
    description: string,
    code: string,
    status?: string
}
