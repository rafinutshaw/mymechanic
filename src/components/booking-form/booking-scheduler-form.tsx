"use client"

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BookingServiceFormProps, IBookingServiceFromInput } from './booking-service-form.types'
import BookingCalender from '../booking-calender/booking-calender'
import { BookingSchedulerFormProps } from './booking-scheduler-form.types'


function BookingSchedulerForm(props: BookingSchedulerFormProps) {

    const { register, handleSubmit } = useForm<IBookingServiceFromInput>()

    const onSubmit: SubmitHandler<IBookingServiceFromInput> = (data) => {
        console.log(data)
        props.onNext(data)
    }





    return (
        <form className={`mx-10 card`} onSubmit={handleSubmit(onSubmit)}>
            <BookingCalender />
            <div className='flex justify-between'>
                <button type='button' onClick={() => props.onPrev()} className='btn-primary'>Go back</button>
                <button type='submit' className='btn-primary'>Next</button>
            </div>
        </form>
    )
}

export default BookingSchedulerForm