"use client"
import BookingContactForm from '@/components/booking-form/booking-contact-form'
import BookingSchedulerForm from '@/components/booking-form/booking-scheduler-form'
import BookingServiceForm from '@/components/booking-form/booking-service-form'
import React, { useState } from 'react'

function Booking() {

    const [step, setStep] = useState(0)

    const goNext = () => {
        setStep(step + 1)
    }

    const goBack = () => {
        setStep(step - 1)
    }

    return (
        <div>
            {/* <div className={`${step == 0 ? 'block' : 'hidden'}`}>
                <BookingServiceForm onNext={goNext} />
            </div>
            <div className={`${step == 1 ? 'block' : 'hidden'}`}>
                <BookingContactForm onNext={goNext} onPrev={goBack} />
            </div> */}
            <div className={`${step == 0 ? 'block' : 'hidden'}`}>
                <BookingSchedulerForm onNext={goNext} onPrev={goBack} />
            </div>
        </div>
    )
}

export default Booking