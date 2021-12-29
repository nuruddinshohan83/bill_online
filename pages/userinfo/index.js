import React from 'react';
import { useFormik } from 'formik';
import { supabase } from '../../utils/supabaseClient';
import { useState } from 'react';
import SignOut from '../../components/SignOut';
useState
const UserInfo = () => {

    const [error, setError] = useState('')
    const [data, setData] = useState('')

    const formik = useFormik({
        initialValues: {
            userName: '',
            companyName: '',
            address: '',
            phoneNum: '',


        },
        onSubmit: values => {
            console.log("form submited")

            async function func() {

                const user = supabase.auth.user();
                console.log(user)
                if (user) {
                    const { data, error } = await supabase
                        .from('profiles')
                        .insert([
                            {
                                username: `${values.userName}`,
                                companyname: `${values.companyName}`,
                                address: `${values.address}`,
                                phonenum: `${values.phoneNum}`,
                                id: `${user.id}`
                            }
                        ])
                    setError(error)
                    setData(data)
                    console.log(error)
                    console.log(data)

                }


            }
            func()
        }
    })


    return (
        <body className=' box-border mx-auto'>

            <div className='container w-2/4 mx-auto mt-8 px-4 font-sans '>
                <p className='text-gray-500 font-medium text-2xl my-8'>Enter your company's details</p>
                <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 ">
                    <div className=''>
                        <label
                            className='block text-gray-500 font-medium text-base mb-2 '
                            htmlFor="userName">User Name</label>
                        <input
                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 '
                            id="userName"
                            name="userName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                        />
                        <label
                            className='block text-gray-500 font-medium text-base mb-2'
                            htmlFor="companyName">Company Name</label>
                    </div>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                        id="companyName"
                        name="companyName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
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
                        value={formik.values.address}
                    />
                    <label
                        className='block text-gray-500 font-medium text-base mb-2'
                        htmlFor="phoneNum">Number</label>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'

                        id="phoneNum"
                        name="phoneNum"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNum}
                    />
                    {error && <p className='text-red-500 font-bold'>{error.message}</p>}
                    {data && <p className='text-green-500 font-bold'>Sucessful</p>}
                    <button type="submit" className='shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4' >Submit</button>

                </form>
            </div>
        </body>
    );
};
export default UserInfo;

