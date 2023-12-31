import React from 'react'
import { ServiceCardType } from './service-card.types'

function ServiceCard(props: ServiceCardType) {
    return (
        <div
            className="block rounded-lg bg-white p-6 shadow border border-blue-200">
            <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                {props.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600">
                {props.description}
            </p>
        </div>
    )
}

export default ServiceCard