"use client"

import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { IFormInput } from "./page.types"


export default function Home() {

  const router = useRouter()

  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    router.push('/booking')
  }


  return (
    <main >

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">Enter postcode/city</label>
          <input id="location"
            {...register("location", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Helsinki" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Get a quote</button>
      </form>

    </main>
  )
}
