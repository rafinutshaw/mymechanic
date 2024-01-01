import Link from 'next/link'
import React from 'react'

function AppHeader() {

    return (
        <div className='flex justify-around bg-blue-400 h-12 items-center absolute w-full font-bold'>
            <Link href={'/'}>MyMechanic</Link>
            <div className='flex gap-3'>
                <div>demo</div>
                <div>demo</div>
                <div>demo</div>
                <div>demo</div>
                <div>demo</div>
                <div>demo</div>
            </div>
        </div>
    )
}

export default AppHeader