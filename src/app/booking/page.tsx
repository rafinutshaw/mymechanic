"use client"
import BookingContactForm from '@/components/booking-form/booking-contact-form'
import { IBookingContactFromInput } from '@/components/booking-form/booking-contact-form.types'
import BookingSchedulerForm from '@/components/booking-form/booking-scheduler-form'
import { IBookingSchedulerFromInput } from '@/components/booking-form/booking-scheduler-form.types'
import BookingServiceForm from '@/components/booking-form/booking-service-form'
import { IBookingServiceFromInput } from '@/components/booking-form/booking-service-form.types'
import React, { useState } from 'react'
import { BookingInfoType } from './page.types'
import BookingReview from '@/components/booking-review/booking-review'
import BookingConfirmation from '@/components/booking-confirmation/booking-confirmation'
import { useRouter } from 'next/navigation'

function Booking() {

    const [bookingInfo, setBookingInfo] = useState<BookingInfoType>({
        registrationNumber: '',
        service: '',
        notes: '',
        fullname: '',
        phone: '',
        email: '',
        date: '',
        address: ''
    });


    const [step, setStep] = useState(0)
    const [maxStep, setMaxStep] = useState(0)
    const router = useRouter()
    const goNext = (value: IBookingServiceFromInput | IBookingContactFromInput | IBookingSchedulerFromInput) => {
        setBookingInfo({ ...bookingInfo, ...value });
        setStep(step + 1)
        if ((step + 1) > maxStep) setMaxStep(step + 1)
    }

    const goBack = () => {
        setStep(step - 1)
    }


    const goToStep = (newStep: number) => {
        debugger
        if (newStep <= maxStep) {
            setStep(newStep)
        }
    }

    const onSubmit = () => {
        router.push('/confirm-booking')
    }
    console.log(bookingInfo!!)
    return (
        <div className='mx-auto  card' style={{ maxWidth: 880 }}>
            <div className='flex items-center'>
                <div className='h-14 w-14 text-xs rounded-full bg-blue-200 border flex justify-center items-center cursor-pointer'
                    onClick={() => goToStep(0)}
                >Service</div>
                <div className='h-2 bg-blue-400 flex-grow'></div>
                <div className='h-14 w-14 text-xs rounded-full bg-blue-200 border flex justify-center items-center cursor-pointer'
                    onClick={() => goToStep(1)}
                >Contact</div>
                <div className='h-2 bg-blue-400 flex-grow'></div>
                <div className='h-14 w-14 text-xs rounded-full bg-blue-200 border flex justify-center items-center cursor-pointer'
                    onClick={() => goToStep(2)}
                >Schedule</div>
                <div className='h-2 bg-blue-400 flex-grow'></div>
                <div className='h-14 w-14 text-xs rounded-full bg-blue-200 border flex justify-center items-center cursor-pointer'
                    onClick={() => goToStep(3)}
                >Confirm</div>
            </div>
            <div className={`${step == 0 ? 'block' : 'hidden'}`}>
                <BookingServiceForm onNext={goNext} />
            </div>
            <div className={`${step == 1 ? 'block' : 'hidden'}`}>
                <BookingContactForm onNext={goNext} onPrev={goBack} />
            </div>
            <div className={`${step == 2 ? 'block' : 'hidden'}`}>
                <BookingSchedulerForm onNext={goNext} onPrev={goBack} />
            </div>
            <div className={`${step == 3 ? 'block' : 'hidden'}`}>
                {bookingInfo!! && <BookingReview bookingInfo={bookingInfo} onNext={onSubmit} onPrev={goBack} />}
            </div>
            {/* <div className={`${step == 4 ? 'block' : 'hidden'}`}>
                <BookingConfirmation />
            </div> */}
        </div>
    )
}

export default Booking