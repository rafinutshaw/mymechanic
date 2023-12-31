
export interface IBookingContactFromInput {
    fullname: string
    phone: string,
    email: string
}

export type BookingContactFormProps = {
    onNext: (e: IBookingContactFromInput) => void
    onPrev: () => void
}