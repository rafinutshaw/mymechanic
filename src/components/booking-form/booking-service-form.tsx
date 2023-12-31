"use client"

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BookingServiceFormProps, IBookingServiceFromInput } from './booking-service-form.types'

const Services = [
    {
        id: 1,
        title: "Car diagnostic",
        description: 'A good description is to be placed here. We will edit this later'
    },
    {
        id: 2,
        title: "Car service",
        description: 'A good description is to be placed here. We will edit this later'
    },
    {
        id: 3,
        title: "Brake repair",
        description: 'A good description is to be placed here. We will edit this later'
    },
    {
        id: 4,
        title: "Tire change",
        description: 'A good description is to be placed here. We will edit this later'
    },
]

function BookingServiceForm(props: BookingServiceFormProps) {

    const { register, handleSubmit } = useForm<IBookingServiceFromInput>()

    const onSubmit: SubmitHandler<IBookingServiceFromInput> = (data) => {
        console.log(data)
        props.onNext(data)
    }

    return (
        <form className={`mx-10 card`} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="registraion" className="form-label">Vehicle registration number</label>
                <input id='registraion' className='form-input' placeholder='XXXXXXX' {...register("registrationNumber", { required: true })} />
            </div>

            <div className="mb-5">
                <div className="form-label">Our services</div>
                <ul className="grid w-full gap-6 grid-cols-4">
                    {Services.map((service) =>
                        <li key={service.title}>
                            <input type="radio" id={service.id.toString()} value={service.title}
                                {...register("service", { required: true })}
                                className="hidden peer" />
                            <label htmlFor={service.id.toString()} className="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-blue-600 hover:bg-blue-50">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">{service.title}</div>
                                    <div className="w-full">{service.description}</div>
                                </div>
                            </label>
                        </li>
                    )}
                </ul>
            </div>

            <div className='mb-5'>
                <label htmlFor="notes" className="form-label">Notes (Optional)</label>
                <textarea id='notes' className='form-input' placeholder='Tell us any issues/symptoms you noticed..' {...register("notes")} />
            </div>
            <div className='flex justify-between flex-row-reverse'>
                <button className='btn-primary' type='submit'>Next</button>
            </div>

        </form>
    )
}

export default BookingServiceForm