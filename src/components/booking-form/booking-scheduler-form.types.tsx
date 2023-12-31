
export interface IBookingSchedulerFromInput {
    registrationNumber: string
    weather: string,
    service: string
    notes: string
}

export type BookingSchedulerFormProps = {
    onNext: (e: IBookingSchedulerFromInput) => void
    onPrev: () => void
}