"use client"

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BookingContactFormProps, IBookingContactFromInput } from './booking-contact-form.types'

function BookingContactForm(props: BookingContactFormProps) {

    const { register, handleSubmit } = useForm<IBookingContactFromInput>()

    const onSubmit: SubmitHandler<IBookingContactFromInput> = (data) => {
        console.log(data)
    }

    return (
        <form className={`mx-10 card`} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="fullname" className="form-label">Enter Fullname</label>
                <input id="location"
                    {...register("fullname", { required: true })}
                    className="form-input" />
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="form-label">Enter Phone</label>
                <input id="phone"
                    {...register("phone", { required: true })}
                    className="form-input" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="form-label">Enter Email</label>
                <input id="email"
                    {...register("email", { required: true })}
                    className="form-input" />
            </div>
            <div className='flex justify-between ml-auto'>
                <button type='button' onClick={() => props.onPrev()} className='btn-primary'>Go back</button>
                <button type='submit' className='btn-primary'>Next</button>
            </div>
        </form>
    )
}

export default BookingContactForm
