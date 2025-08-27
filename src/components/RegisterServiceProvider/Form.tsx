"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { email, phoneNumber } from "@/utils/data";
import { PhoneIcon } from "lucide-react";
import mockup from "@/assets/images/contact/mockup.png";
import emailIcon from "@/assets/icons/mail.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  address: string;
  country: string;
  city: string;
}

// Enhanced address validation regex
const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s'-]+$/, "Name should only contain letters and spaces"),
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^\+?\d{10,15}$/,
      "Invalid phone number format. Use 10-15 digits with optional +"
    ),
  companyName: z
    .string()
    .min(1, "Business name is required")
    .max(100, "Business name is too long"),
  role: z.string().min(1, "Please select a provider type"),
  address: z
    .string()
    .min(1, "Business address is required")
    .max(200, "Address is too long")
    .regex(
      addressRegex,
      "Address must include street number and name (e.g., 123 Main St)"
    ),
  country: z
    .string()
    .min(1, "Country is required")
    .max(100, "Country name is too long"),
  city: z
    .string()
    .min(1, "State/City is required")
    .max(100, "State/City name is too long"),
});

const ServiceProviderForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    role: "",
    address: "",
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const serviceProviderTypes = [
    { value: "Mechanic", label: "Mechanic" },
    { value: "Technician", label: "Technician" },
    { value: "Car Wash", label: "Car wash" },
    { value: "Car Detailer", label: "Car Detailer" },
    { value: "Car Hauler", label: "Car Hauler" },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
    if (errors.role) {
      setErrors((prev) => ({ ...prev, role: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    const url = process.env.NEXT_PUBLIC_URL + '/waitlist'

    try {
      // Validate form data with Zod
      formSchema.parse(formData);

      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        role: "",
        address: "",
        country: "",
        city: "",
      });
      toast.success("Registration submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        error.issues.forEach((issue) => {
          // Change 'errors' to 'issues'
          const fieldName = issue.path[0] as keyof FormData;
          fieldErrors[fieldName] = issue.message;
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus("error");
        toast.error("Failed to submit registration. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="w-full md:h-[600px] xl:px-[5rem] 2xl:px-0 mt-[2rem]">
        <div className="w-full h-full flex md:justify-center">
          <div className="xl:w-1/2 bg-white xl:pl-[5rem] px-7 xl:px-0 py-[2rem] xl:rounded-l-[3rem]">
            <div className="w-full h-full flex flex-col justify-center items-start gap-y-7">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-3xl font-semibold">
                  Join the largest network of Car Service Providers
                </h2>
                <p className="text-gray-500 text-sm xl:w-2/3">
                  To become a service partner with Whipcare, fill in your
                  details below, and {"we'd"} make it happen soon!
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 text-sm border border-gray-300 rounded"
                    placeholder="Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 text-sm border border-gray-300 rounded"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="w-full flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 text-sm border border-gray-300 rounded"
                      placeholder="Phone number (e.g., +1234567890)"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.role}
                    >
                      <SelectTrigger className="w-full text-gray-500">
                        <SelectValue placeholder="Select Provider Type" />
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
                    {errors.role && (
                      <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-3 text-sm border border-gray-300 rounded"
                      placeholder="Business Name"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 text-sm border border-gray-300 rounded"
                      placeholder="Business Address (e.g., 123 Main St)"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-3 text-sm border border-gray-300 rounded"
                      placeholder="Country"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 text-sm border border-gray-300 rounded"
                      placeholder="State/City"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-brand-500 w-full flex justify-center text-white font-medium py-3 rounded hover:bg-brand-600 transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </form>
              <div className="flex sm:justify-between justify-start w-full gap-5 sm:items-center sm:flex-row flex-col">
                <div className="flex gap-x-3 items-center">
                  <div>
                    <Image
                      src={emailIcon}
                      alt="email icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h2 className="uppercase text-lg font-semibold">Email</h2>
                    <p className="text-sm text-brand-500">{email}</p>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center">
                  <div>
                    <PhoneIcon size={20} />
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
                  alt="map image"
                  className="h-full object-cover"
                  priority
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
