import React from 'react'

export default function Form(props) {
    let { handleSubmit, city, setCity } = props || {}
    return (
        <form onSubmit={handleSubmit} class="my-1">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="flex justify-center ">
                <input type="search" id="default-search" value={city} onChange={(e) => setCity(e.target.value)} class=" mr-2 block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[300px]" placeholder="Search Cities..." required></input>
                <button type="submit" class="text-white h-[54px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    )
}
