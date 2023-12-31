
export interface IBookingServiceFromInput {
    registrationNumber: string
    weather: string,
    service: string
    notes: string
}

export type BookingServiceFormProps = {
    onNext: (e: IBookingServiceFromInput) => void
}