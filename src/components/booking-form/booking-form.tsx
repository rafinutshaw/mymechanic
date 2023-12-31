"use client"

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IBookingFromInput } from './booking-form.types'
import ServiceCard from '../service-card/service-card'

const Services = [
    {
        title: "Car diagnostic",
        description: 'A good description is to be placed here. We will edit this later'
    },
    {
        title: "Car service",
        description: 'A good description is to be placed here. We will edit this later'
    },
    {
        title: "Brake repair",
        description: 'A good description is to be placed here. We will edit this later'
    },
    {
        title: "Tire change",
        description: 'A good description is to be placed here. We will edit this later'
    },
]

function BookingForm() {

    const { register, handleSubmit } = useForm<IBookingFromInput>()

    const onSubmit: SubmitHandler<IBookingFromInput> = (data) => {
    }

    return (
        <form className='mx-10 mx-auto card' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="registraion" className="form-label">Vehicle registration number</label>
                <input id='registraion' className='form-input' {...register("registrationNumber", { required: true })} />
            </div>

            <div className="mb-5">
                <div className="form-label">Our services</div>
                <ul className="grid w-full gap-6 grid-cols-4">
                    {Services.map((service) =>
                        <li>
                            <input type="radio" id={service.title} value={service.title}
                                {...register("service", { required: true })}
                                className="hidden peer" />
                            <label htmlFor={service.title} className="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-blue-600 hover:bg-blue-50">
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

            <button className='btn-primary' type='submit'>Next</button>

        </form>
    )
}

export default BookingForm