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
            {/* stepper  */}
            <div className='flex items-center'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <>
                        {/* Stepper circle */}
                        <div
                            className={`h-14 w-14 text-xs rounded-full border flex justify-center items-center cursor-pointer 
                            ${step === index ? 'bg-blue-500 text-white' : 'bg-blue-200 text-gray-700'}
                            ${index > maxStep ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => goToStep(index)}
                            key={index}
                        >
                            {['Service', 'Contact', 'Schedule', 'Confirm'][index]}
                        </div>
                        {/* Stepper line (except after the last step) */}
                        {index !== 3 && <div className='h-2 bg-blue-400 flex-grow'></div>}
                    </>
                ))}
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