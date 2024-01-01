import BookingConfirmation from '@/components/booking-confirmation/booking-confirmation'
import React from 'react'

function page() {
    return (
        <div className='mx-auto  card' style={{ maxWidth: 880 }}>
            <BookingConfirmation />
        </div>
    )
}

export default page