import { BookingInfoType } from '@/app/booking/page.types'
import React from 'react'
import { BookingReviewProps } from './booking-review.types'

function BookingReview(props: BookingReviewProps) {

  const { bookingInfo, onNext, onPrev } = props

  const getDate = (inputDate: Date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const month = months[inputDate.getMonth()];
    const day = String(inputDate.getDate()).padStart(2, '0'); // Ensure two digits
    const year = inputDate.getFullYear();
    const hours = String(inputDate.getHours()).padStart(2, '0'); // Ensure two digits
    const minutes = String(inputDate.getMinutes()).padStart(2, '0'); // Ensure two digits

    return `${dayOfWeek} ${month} ${day} ${year} ${hours}:${minutes}`;
  }

  return (
    <div >
      <div className='text-xl font-bold mb-2'>Review & Confirm</div>

      <div className='card mb-2'>
        <div className='text-lg font-bold mb-2'>Personal Info</div>
        <div>
          <div>
            Fullname: {bookingInfo.fullname}
          </div>
          <div>
            Email: {bookingInfo.email}
          </div>
          <div>
            Phone: {bookingInfo.phone}
          </div>
          <div>
            Address: {bookingInfo.address}
          </div>
        </div>
      </div>

      <div className='card mb-2'>
        <div className='text-lg font-bold mb-2'>Service</div>
        <div>
          <div>
            Requested service: {bookingInfo.service}
          </div>
          <div>
            Notes: {bookingInfo.notes}
          </div>
          <div>
            Date & Time: {getDate(new Date(bookingInfo.date))}
          </div>
        </div>
      </div>

      <div className='card mb-2'>
        <div className='text-lg font-bold mb-2'>Vehicle Info</div>
        <div>
          <div>
            Brand: BMW
          </div>
          <div>
            Model: XLS 2020
          </div>
          <div>
            Registration: {bookingInfo.registrationNumber}
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <button type='button' onClick={() => onPrev()} className='btn-primary'>Go back</button>
        <button type='button' onClick={() => onNext()} className='btn-primary'>Next</button>
      </div>
    </div>
  )
}

export default BookingReview