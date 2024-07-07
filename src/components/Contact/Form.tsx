import React from 'react'
import Image from 'next/image'
import map from "@/assets/images/contact/map.png"
import emailIcon from "@/assets/icons/mail.svg";

const Form = () => {
    return (
        <div>
            <div className="w-full h-[600px] xl:px-[5rem] 2xl:px-0 mt-[2rem]">
                <div className="w-full h-full flex">

                    <div className='w-1/2 bg-white pl-[5rem] py-[2rem] rounded-l-[3rem]'>
                        <div className="w-full h-full flex flex-col justify-center items-start gap-y-7">
                            <div className='flex flex-col gap-y-2'>
                                <h2 className='text-3xl font-semibold'>Contact Us</h2>
                                <p className='text-gray-500 text-sm w-2/3'>Have questions or need assistance? Our customer support team is here to help. Contact us.</p>
                            </div>
                            <div className='w-full flex flex-col gap-y-4'>
                                <div>
                                    <input
                                        type="text"
                                        required
                                        className='w-full p-3 text-sm border border-gray-300'
                                        placeholder="Name" />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        required
                                        className='w-full p-3 text-sm border border-gray-300'
                                        placeholder="Email" />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        required
                                        className='w-full p-3 text-sm border border-gray-300'
                                        placeholder="Phone number" />
                                </div>

                                <div>
                                    <textarea
                                        className='w-full p-3 text-sm border border-gray-300'
                                        placeholder='Message'></textarea>

                                </div>


                                <button className='bg-brand-500 w-full flex justify-center text-white font-medium py-2 hover:bg-brand-400'>SEND</button>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <div>
                                    <Image src={emailIcon} alt='email icon' />
                                </div>
                                <div>
                                    <h2 className="uppercase text-lg font-semibold">Email</h2>
                                    <p className='text-sm text-brand-500'>whipcare@zacwurld.com</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='h-full w-1/2 relative flex items-center justify-center'>
                        <div className='h-full w-1/2 bg-white'></div>
                        <div className='h-full w-1/2 bg-brand-500  rounded-r-[3rem]'></div>
                        <div className='absolute w-1/2 h-[80%]'>
                            <Image src={map} alt="map image" className='h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form