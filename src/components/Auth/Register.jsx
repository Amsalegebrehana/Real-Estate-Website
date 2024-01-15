import React, { useState, useEffect } from 'react';

const RegisterForm = () =>{

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data));
    }, []);


    return(
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-base leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-base font-this leading-6 text-gray-900">
                        First name
                        </label>
                        <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-base font-thin leading-6 text-gray-900">
                        Last name
                        </label>
                        <div className="mt-2">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-base font-thin leading-6 text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="phone-number" className="block text-base font-thin leading-6 text-gray-900">
                        Phone Number
                        </label>
                        <div className="mt-2">
                        <input
                            id="phone-number"
                            name="phone-number"
                            type="text"
                            autoComplete="phone-number"
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-base font-this leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="password"
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="confirm-password" className="block text-base font-thin leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                        <input
                            type="password"
                            name="confirm-passworde"
                            id="confirm-password"
                            autoComplete="confirm-password"
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                <div className="sm:col-span-4">
                    <label htmlFor="country" className="block text-base font-thin leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-xl border-0 py-3 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option className='ml-5'>United States</option>
                            <option className='ml-5'>Ethiopia</option>
                            <option className='ml-5'>Canada</option>
                            
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-base font-thin leading-6 text-gray-900">
                    Street address
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-base font-thin leading-6 text-gray-900">
                    City
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-base font-thin leading-6 text-gray-900">
                    State / Province
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-base font-thin leading-6 text-gray-900">
                    ZIP / Postal code
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button type="button" className="text-base font-medium leading-6 text-gray-900">
                Cancel
                </button>
                <button
                type="submit"
                className="rounded-2xl bg-primary px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div>
            </form>
      </div>

    )
}

export default RegisterForm;