
export default function Home() {
  return (
    <main >

      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">Enter postcode/city</label>
          <input id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Helsinki" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Get a quote</button>
      </form>

    </main>
  )
}
