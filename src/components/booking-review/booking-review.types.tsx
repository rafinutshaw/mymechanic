import { BookingInfoType } from "@/app/booking/page.types"

export type BookingReviewProps = {
  bookingInfo: BookingInfoType
  onNext: () => void
  onPrev: () => void
}