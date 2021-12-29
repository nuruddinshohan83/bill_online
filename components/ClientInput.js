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
    const [num, setNum] = useState(0)
    const [child, setChild] = useState([])

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


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name"> Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                {cerror && <p>{error.message}</p>}
                {cdata && <p>Sucessful</p>}
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={formikCli.handleSubmit}>
                <label htmlFor="pname">Product Name</label>
                <input
                    id="pname"
                    name="pname"
                    type="text"
                    onChange={formikCli.handleChange}
                    value={formikCli.values.pname}
                />
                <label htmlFor="price">Price </label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formikCli.handleChange}
                    value={formikCli.values.price}
                />

                {perror && <p>{perror.message}</p>}
                {pdata && <p>Sucessful</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
/*
 
*/