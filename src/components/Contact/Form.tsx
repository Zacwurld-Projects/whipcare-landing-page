"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mockup from "@/assets/images/contact/mockup.png";
import emailIcon from "@/assets/icons/mail.svg";
import { email, phoneNumber } from "@/utils/data";
import { PhoneIcon } from "lucide-react";

const Form = () => {
  const url = process.env.NEXT_PUBLIC_URL + "/feedback/complaints";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    complaint: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Failed to submit complaint", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        throw new Error("Failed to submit complaint");
      }

      await response.json();
      toast.success("Complaint sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        complaint: "",
      });
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting the complaint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full h-[600px] xl:px-[5rem] 2xl:px-0 mt-[2rem]">
        <div className="w-full h-full flex md:justify-center">
          <div className="xl:w-1/2 bg-white xl:pl-[5rem] px-7 xl:px-0 py-[2rem] xl:rounded-l-[3rem]">
            <div className="w-full h-full flex flex-col justify-center items-start gap-y-7">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-3xl font-semibold">Contact Us</h2>
                <p className="text-gray-500 text-sm xl:w-2/3">
                  Have questions or need assistance? Our customer support team is here to help. Contact us.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-sm border border-gray-300"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-sm border border-gray-300"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-sm border border-gray-300"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-sm border border-gray-300"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <textarea
                    name="complaint"
                    value={formData.complaint}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-sm border border-gray-300"
                    placeholder="Message"
                  ></textarea>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="bg-brand-500 w-full flex justify-center text-white font-medium py-2 hover:bg-brand-400 disabled:bg-brand-300"
                  disabled={loading}
                >
                  {loading ? "SENDING..." : "SEND"}
                </button>
              </form>
             <div className="flex justify-between w-full items-center">
             <div className="flex gap-x-3 items-center">
                <div>
                  <Image src={emailIcon} alt="email icon" />
                </div>
                <div>
                  <h2 className="uppercase text-lg font-semibold">Email</h2>
                  <p className="text-sm text-brand-500">{email}</p>
                </div>
              </div>
              <div className="flex gap-x-3 items-center">
                <div>
                 <PhoneIcon />
                </div>
                <div>
                  <h2 className="uppercase text-lg font-semibold">Call</h2>
                  <p className="text-sm text-brand-500">{phoneNumber}</p>
                </div>
              </div>
             </div>
            </div>
          </div>
          <div className="hidden xl:flex h-full w-1/2 relative items-center justify-center">
            <div className="h-full w-1/2 bg-white"></div>
            <div className="h-full w-1/2 bg-brand-500 rounded-r-[3rem]"></div>
            <div className="absolute w-1/2 h-[80%]">
              <div className="h-full">
                <Image
                  src={mockup}
                  alt="Whipcare contact page map showing service coverage in Nigeria"
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;