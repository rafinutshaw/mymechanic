import Link from 'next/link'
import React from 'react'

function AppHeader() {

    return (
        <div className='flex justify-around bg-blue-400 h-12 items-center absolute w-full'>
            <Link href={'/'}>Home</Link>
            <div>Menu</div>
        </div>
    )
}

export default AppHeader