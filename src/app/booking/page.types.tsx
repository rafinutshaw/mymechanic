import { IBookingContactFromInput } from "@/components/booking-form/booking-contact-form.types";
import { IBookingSchedulerFromInput } from "@/components/booking-form/booking-scheduler-form.types";
import { IBookingServiceFromInput } from "@/components/booking-form/booking-service-form.types";

export type BookingInfoType = IBookingServiceFromInput & IBookingContactFromInput & IBookingSchedulerFromInput & {
    address: string
};