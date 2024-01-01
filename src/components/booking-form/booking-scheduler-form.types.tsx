
export interface IBookingSchedulerFromInput {
    date: string
}

export type BookingSchedulerFormProps = {
    onNext: (e: IBookingSchedulerFromInput) => void
    onPrev: () => void
}