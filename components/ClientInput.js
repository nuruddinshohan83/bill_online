import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient';
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
export default function ClientInput() {
    const [cdata, setCdata] = useState("")
    const [cerror, setCerror] = useState("")
    const [pdata, setPdata] = useState("")
    const [perror, setPerror] = useState("")
    const [user, setUser] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            phone: '',

        },
        onSubmit: values => {
            async function insertClient() {
                console.log("inserting Client")
                const userv = supabase.auth.user();
                setUser(userv)
                console.log(user)


                if (user) {
                    const { data, error } = await supabase
                        .from('tclients')
                        .insert([
                            {
                                name: `${values.name}`,
                                address: `${values.address}`,
                                phone: `${values.phone}`,

                                pid: `${user.id}`
                            }
                        ])
                    setCerror(error)
                    setCdata(data)

                    console.log(error)
                    console.log(data)

                    console.log("Client ID", cId)

                }

            }
            insertClient()
        },
    })

    const formikCli = useFormik({
        initialValues: {
            pname: '',
            price: '',

        },
        onSubmit: values => {
            async function func() {

                console.log("products", user.id)
                console.log(cId, values.price, values.pname)
                console.log(cdata[0].id)
                if (user) {
                    const { data, error } = await supabase
                        .from('products')
                        .insert([
                            {
                                id: `${uuidv4()}`,
                                pid: `${user.id}`,
                                cid: `${cdata[0].id}`,
                                pname: `${values.pname}`,
                                price: `${values.price}`,

                            }
                        ])
                    setPerror(error)
                    setPdata(data)
                    console.log("test")
                    console.log(error)
                    console.log(data)

                }

            }
            func()
        },
    })
    //block text-gray-500 font-medium text-base mb-2
    //bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500

    return (
        <div>
            <div className='w-2/4 mx-32'>
                <p className='text-gray-500 font-medium text-2xl my-8 px-8 pt-6  mb-4'>Enter your client's details</p>

                <form
                    className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'
                    onSubmit={formik.handleSubmit}>
                    <label htmlFor="name" className='block text-gray-500 font-medium text-base mb-2'> Name</label>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <label
                        className='block text-gray-500 font-medium text-base mb-2'
                        htmlFor="address">Address</label>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id="address"
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <label
                        className='block text-gray-500 font-medium text-base mb-2'
                        htmlFor="phone">Phone Number</label>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    {cerror && <p>{cerror.message}</p>}
                    {cdata && <p>Sucessful</p>}
                    <button
                        className='shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4'
                        type="submit">Submit</button>
                </form>
            </div>
            <div className='w-2/4 mx-32'>
                <p className='text-gray-500 font-medium text-2xl my-8 px-8 pt-6  mb-4'>Enter your product's details</p>
                <form
                    className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'
                    onSubmit={formikCli.handleSubmit}>
                    <label
                        className='block text-gray-500 font-medium text-base mb-2'
                        htmlFor="pname">Product Name</label>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id="pname"
                        name="pname"
                        type="text"
                        onChange={formikCli.handleChange}
                        value={formikCli.values.pname}
                    />
                    <label
                        className='block text-gray-500 font-medium text-base mb-2'
                        htmlFor="price">Price </label>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'

                        id="price"
                        name="price"
                        type="text"
                        onChange={formikCli.handleChange}
                        value={formikCli.values.price}
                    />

                    {perror && <p>{perror.message}</p>}
                    {pdata && <p>Sucessful</p>}
                    <button className='shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
/*
 
*/