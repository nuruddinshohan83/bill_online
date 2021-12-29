import React from 'react';
import { useFormik } from 'formik';
import { supabase } from '../../utils/supabaseClient';
import { useState } from 'react';
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
        <div className='bg-gray-100 w-5/12 box-border mx-auto'>
            <form onSubmit={formik.handleSubmit} className="mx-auto  ">
                <div className=''>
                    <label className='block text-lg ' htmlFor="userName">User Name</label>
                    <input
                        className='block '
                        id="userName"
                        name="userName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                    />
                    <label className='block' htmlFor="companyName">Company Name</label>
                </div>
                <input
                    className='block'
                    id="companyName"
                    name="companyName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                />
                <label className='block' htmlFor="address">Address</label>
                <input
                    className='block'

                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                <label className='block' htmlFor="phoneNum">Number</label>
                <input
                    className='block'

                    id="phoneNum"
                    name="phoneNum"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNum}
                />
                {error && <p>{error.message}</p>}
                {data && <p>Sucessful</p>}
                <button type="submit" className='block' >Submit</button>

            </form>

        </div>
    );
};
export default UserInfo;

