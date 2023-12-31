"use client"

import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { IBookingLocationInput } from "./page.types"


export default function Home() {

  const router = useRouter()

  const { register, handleSubmit } = useForm<IBookingLocationInput>()
  const onSubmit: SubmitHandler<IBookingLocationInput> = (data) => {
    router.push('/booking')
  }

  return (
    <main >

      <form className="max-w-sm mx-auto card" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="location" className="form-label">Enter postcode/city</label>
          <input id="location"
            {...register("location", { required: true })}
            className="form-input" placeholder="Helsinki" />
        </div>
        <button type="submit" className="btn-primary">Get a quote</button>
      </form>

    </main>
  )
}
