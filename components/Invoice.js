import React from 'react'

export default function Invoice(props) {
    return (
        <div className='bg-gray-200  mx-auto'>
            <div className="w-5/6  mx-auto">

                <div className='flex flex-row  justify-between p-8'>
                    <div className='w-1/2 '>
                        <p className='m-2 font-bold text-3xl'>Company name </p>
                        <p className='m-1 text-xl' ><span className="font-bold">Address : </span> this is a address</p>
                        <p className='m-1 text-xl' ><span className="font-bold">Phone :</span> 0161901619</p>


                    </div>

                    <div className="flex flex-col items-end  w-1/2">
                        <p className='m-1 font-bold text-3xl'>Invoice</p>
                        <p className='my-1 text-xl' ><span className="font-bold">Date :</span> 20.10.21</p>
                        <p className='my-1 text-xl' ><span className="font-bold">Customer ID :</span> 23112</p>
                    </div>
                </div>

                <div className="px-8 mb-8">
                    <p className=" font-bold text-3xl bg-blue-500 w-1/5">Bill to </p>
                    <p className='m-1 text-xl' ><span className="font-bold">Name : </span> Md Nur Uddin Shohan</p>
                    <p className='m-1 text-xl' ><span className="font-bold">Address : </span> this is a address</p>
                    <p className='m-1 text-xl' ><span className="font-bold">Phone :</span> 0161901619</p>
                </div>
                <div>
                    <div className="bg-blue-500 flex  justify-between  text-2xl border-solid border-2 border-black">
                        <p className=" font-bold pl-8">Name </p>
                        <p className="font-bold pr-4">Ammount </p>

                    </div>
                    <div className="flex text-xl justify-between bg-indigo-100 p-4 border-solid border-2 border-black">
                        <p className="  pl-12">Name </p>
                        <p className=" pr-8">Ammount </p>
                    </div>
                    <div className="flex text-xl  justify-end p-4 item-start w-full  ">

                        <p className="border-solid  pr-8">Total { } </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
/*
border-solid border-4 border-black
*/