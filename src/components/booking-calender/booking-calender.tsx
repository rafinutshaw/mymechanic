import LeftArrowIcon from '@/icons/left-arrow.icon';
import RightArrowIcon from '@/icons/right-arrow.icon';
import React, { useEffect, useState } from 'react'

function BookingCalender() {

    const [weekDates, setWeekDates] = useState<Date[]>([])

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
        if (date.getDay() == 0 || date.getDay() == 6) return <></>
        return <div key={date.toDateString()} className='border rounded-md max-w-20 w-full'>
            <div className='text-center text-sm'>{monthNames[date.getMonth()]}</div>
            <div className='text-center font-bold'>{weekday[date.getDay()]}</div>
            <div className='text-center'>{date.getDate()}</div>
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

    return (
        <div>

            <div className='flex gap-2 justify-between items-center mb-2'>
                <div className='w-10 cursor-pointer' onClick={() => updateWeekIndex(-1)}>  <LeftArrowIcon /></div>
                {weekDates.map((date) => dateBox(date))}
                <div className='w-10 cursor-pointer' onClick={() => updateWeekIndex(1)}><RightArrowIcon /></div>
            </div>

            <div className=''>
                {[...Array(8)].map((_, index) => {
                    return <div className='flex justify-between gap-2 mb-2'>
                        <div className='min-w-10' />
                        {[...Array(7)].map((_) => <div className='max-w-20 h-10 w-full rounded-md border border-blue-200 bg-blue-100 flex flex-col justify-center text-center'>
                            {`${8 + 2 * index}:00`}
                        </div>)}
                        <div className='min-w-10' />
                    </div>
                })}
            </div>
        </div>
    )
}

export default BookingCalender