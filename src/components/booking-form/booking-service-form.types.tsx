
export interface IBookingServiceFromInput {
    registrationNumber: string
    service: string
    notes: string
}

export type BookingServiceFormProps = {
    onNext: (e: IBookingServiceFromInput) => void
}