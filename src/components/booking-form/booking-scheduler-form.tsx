"use client"

import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BookingServiceFormProps, IBookingServiceFromInput } from './booking-service-form.types'
import { BookingSchedulerFormProps, IBookingSchedulerFromInput } from './booking-scheduler-form.types'
import LeftArrowIcon from '@/icons/left-arrow.icon'
import RightArrowIcon from '@/icons/right-arrow.icon'


function BookingSchedulerForm(props: BookingSchedulerFormProps) {

    const onSubmit: SubmitHandler<IBookingSchedulerFromInput> = (data) => {
        props.onNext(data)
    }

    const [weekDates, setWeekDates] = useState<Date[]>([])

    const { register, formState: { errors, }, watch, handleSubmit } = useForm<IBookingSchedulerFromInput>()

    const formValues = watch()

    const generateDates = (startDate: Date, asc: boolean) => {
        let dates: Date[] = [];
        const today = new Date()
        today.setHours(0, 0, 0, 0);
        const gap = asc ? 1 : -1
        let count = 0
        for (let index = 0; count < 7; index++) {
            const d = new Date(startDate);
            d.setDate(d.getDate() + index * gap);
            d.setHours(0, 0, 0, 0);
            if (d.getDay() !== 0 && d.getDay() !== 6) {
                count++
            }
            dates.push(d);

        }
        if (!asc) dates.reverse()
        if (dates[0] == weekDates[0]) return weekDates
        return dates;
    }


    useEffect(() => {
        setWeekDates(generateDates(new Date(), true))
    }, [])

    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mae", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const dateBox = (date: Date) => {
        return <div className='max-w-20 w-full' key={date.toDateString()}>
            <div className='border rounded-md w-full mb-2'>
                <div className='text-center text-sm'>{monthNames[date.getMonth()]}</div>
                <div className='text-center font-bold'>{weekday[date.getDay()]}</div>
                <div className='text-center'>{date.getDate()}</div>
            </div>
            {getTimeCol(date)}
        </div>
    }

    function isBeforeOrToday(inputDate: Date) {
        const today = new Date();
        return inputDate.getDate() <= today.getDate() &&
            inputDate.getMonth() <= today.getMonth() &&
            inputDate.getFullYear() <= today.getFullYear();
    }

    const updateWeekIndex = (gap: number) => {

        let lastDay = weekDates[0].getDay()
        const firstDate = weekDates[0]
        if (lastDay == 0)
            firstDate.setDate(firstDate.getDate() - 2)
        else if (lastDay == 6)
            firstDate.setDate(firstDate.getDate() - 1)
        else if (lastDay == 1)
            firstDate.setDate(firstDate.getDate() - 3)

        if (gap == -1 && isBeforeOrToday(firstDate)) return


        const newDate = weekDates[gap == -1 ? 0 : weekDates.length - 1]
        newDate.setDate(newDate.getDate() + gap)

        setWeekDates(generateDates(newDate, gap == 1))
    }

    const isSame = (date: Date) => {
        if (formValues.date) {
            const formDate = new Date(formValues.date);
            return date.getTime() === formDate.getTime();
        }
        return false
    }

    const getTimeCol = (date: Date) => {
        return [...Array(5)].map((_, timeIndex) => {
            const d = new Date(date)
            d.setHours(8 + 2 * timeIndex, 0, 0, 0)

            return <div
                key={timeIndex}
                className={`max-w-20 h-10 w-full rounded-md mb-2
            ${d >= new Date() ? 'cursor-pointer hover:bg-blue-300 hover:text-white bg-blue-100' : 'cursor-not-allowed bg-gray-100'} 
            ${isSame(d) ? 'text-white bg-blue-400' : ""}
            `}>
                {/* {`${8 + 2 * timeIndex}:00`} */}
                <input type="radio" id={d.toString()} value={d.toString()}
                    {...register("date", { required: true })}
                    disabled={d < new Date()}
                    className="hidden peer" />
                <label htmlFor={d.toString()} className="w-full h-full flex flex-col justify-center text-center">
                    {`${8 + 2 * timeIndex}:00`}
                </label>
            </div>
        }
        )
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='text-xl font-bold mb-2'>Pick a slot</div>

            <div className='flex gap-2 justify-between items-center mb-2'>
                <div className='w-10 cursor-pointer' onClick={() => updateWeekIndex(-1)}>  <LeftArrowIcon /></div>
                {weekDates.filter((date) => !(date.getDay() == 0 || date.getDay() == 6)).map((date) => dateBox(date))}
                <div className='w-10 cursor-pointer' onClick={() => updateWeekIndex(1)}><RightArrowIcon /></div>
            </div>

            <div className='flex justify-between'>
                <button type='button' onClick={() => props.onPrev()} className='btn-primary'>Go back</button>
                <button type='submit' className='btn-primary'>Next</button>
            </div>
        </form>
    )
}

export default BookingSchedulerForm