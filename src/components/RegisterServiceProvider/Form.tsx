"use client";

import React from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import mockup from "@/assets/images/contact/mockup.png";
import emailIcon from "@/assets/icons/mail.svg";
import { email } from "@/utils/data";

const ServiceProviderForm = () => {
  const serviceProviderTypes = [
    {
      value: "mechanic",
      label: "Mechanic",
    },
    {
      value: "technician",
      label: "Technician",
    },
    {
      value: "car_wash",
      label: "Car wash",
    },
    {
      value: "car_detailer",
      label: "Car Detailer",
    },
    {
      value: "car_hauler",
      label: "Car Hauler",
    },
  ];
  return (
    <div>
      <div className='w-full md:h-[600px] xl:px-[5rem] 2xl:px-0 mt-[2rem]'>
        <div className='w-full h-full flex md:justify-center'>
          <div className='xl:w-1/2 bg-white xl:pl-[5rem] px-7 xl:px-0 py-[2rem] xl:rounded-l-[3rem]'>
            <div className='w-full h-full flex flex-col justify-center items-start gap-y-7'>
              <div className='flex flex-col gap-y-2'>
                <h2 className='text-3xl font-semibold'>
                  Join the largest network of Car Service Providers
                </h2>
                <p className='text-gray-500 text-sm xl:w-2/3'>
                  To become a service partner with Whipcare, fill in your
                  details below, and {"we'd"} make it happen soon!
                </p>
              </div>
              <div className='w-full flex flex-col gap-y-4'>
                <div>
                  <input
                    type='text'
                    required
                    className='w-full p-3 text-sm border border-gray-300'
                    placeholder='Name'
                  />
                </div>

                <div>
                  <input
                    type='email'
                    required
                    className='w-full p-3 text-sm border border-gray-300'
                    placeholder='Email'
                  />
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                  <div className='w-full md:w-1/2'>
                    <input
                      type='tel'
                      required
                      className='w-full p-3 text-sm border border-gray-300'
                      placeholder='Phone number'
                    />
                  </div>
                  <div className='w-full md:w-1/2'>
                    <Select>
                      <SelectTrigger className='w-full text-gray-500'>
                        <SelectValue placeholder='Select Provider Type' />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceProviderTypes.map(
                          (serviceProviderType, index) => (
                            <SelectItem
                              key={index}
                              value={serviceProviderType.value}
                            >
                              {serviceProviderType.label}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                  <div className='w-full md:w-1/2'>
                    <input
                      type='text'
                      required
                      className='w-full p-3 text-sm border border-gray-300'
                      placeholder='Business Name'
                    />
                  </div>

                  <div className='w-full md:w-1/2'>
                    <input
                      type='text'
                      required
                      className='w-full p-3 text-sm border border-gray-300'
                      placeholder='Business Address'
                    />
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                  <div className='w-full md:w-1/2'>
                    <input
                      type='text'
                      required
                      className='w-full p-3 text-sm border border-gray-300'
                      placeholder='Country'
                    />
                  </div>

                  <div className='w-full md:w-1/2'>
                    <input
                      type='text'
                      required
                      className='w-full p-3 text-sm border border-gray-300'
                      placeholder='State'
                    />
                  </div>
                </div>

                <button className='bg-brand-500 w-full flex justify-center text-white font-medium py-2 hover:bg-brand-400'>
                  Register
                </button>
              </div>
              <div className='flex gap-x-3 items-center'>
                <div>
                  <Image src={emailIcon} alt='email icon' />
                </div>
                <div>
                  <h2 className='uppercase text-lg font-semibold'>Email</h2>
                  <p className='text-sm text-brand-500'>{email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='hidden xl:flex h-full w-1/2 relative items-center justify-center'>
            <div className='h-full w-1/2 bg-white'></div>
            <div className='h-full w-1/2 bg-brand-500  rounded-r-[3rem]'></div>
            <div className='absolute w-1/2 h-[80%]'>
              <div className='h-full'>
                <Image
                  src={mockup}
                  alt='map image'
                  className='h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderForm;
