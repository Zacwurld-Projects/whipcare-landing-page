"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TestimonialCard from "../cards/Testimonial";
import backgroundImage from "@/assets/images/hero/testimonials-bg.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import axios from "axios";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  const [reviews, setReviews] = useState<
    { firstName: string; lastName: string; rating: number; review: string; customerImage: string | null }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackTestimonials = [
    {
      firstName: "Jane",
      lastName: "Doe",
      review: "Absolutely loved the service. Smooth and reliable! I will definitely be using this service more and more and more",
      rating: 5,
      customerImage: null,
    },
    {
      firstName: "Mike",
      lastName: "Smith",
      review: "Booking was quick and easy. Will use again.",
      rating: 4,
      customerImage: null,
    },
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      const baseUrl =
        process.env.NEXT_PUBLIC_URL ||
        "https://whipcare-admin-backend-production.up.railway.app/api/v1";
      const url = `${baseUrl}/feedback/reviews/landing-page`;
      try {
        const response = await axios.get(url);
        const reviewsData = response?.data?.data;
        if (Array.isArray(reviewsData)) {
          setReviews(reviewsData);
        } else {
          setError("Unexpected data format from API");
        }
      } catch (err: any) {
        setError(`Failed to fetch reviews: ${err.message || err}`);
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const displayReviews = reviews.length === 0 ? fallbackTestimonials : reviews;
  const testimonialCount = displayReviews.length || 0;

  if (loading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="w-full h-full flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <section
      className="w-full h-full bg-gray-50 py-[4rem] xl:py-[5rem] mb-[5rem] overflow-hidden"
      ref={ref}
    >
      <div className="w-full h-full flex flex-col gap-y-5">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center px-7 xl:px-7"
        >
          <p className="text-sm text-gray-600">
            <span className="text-brand-500">
              {inView ? (
                <CountUp start={0} end={testimonialCount} duration={2.5} />
              ) : (
                0
              )}
            </span>{" "}
            people have experienced quality service with Whipcare
          </p>
          <h2 className="text-3xl text-black font-semibold">
            {"Don't"} Just Take Our Word For it
          </h2>
          <p className="text-sm text-gray-600">
            {"Here's"} what other users say about us
          </p>
        </motion.div>

        <div className="xl:h-[320px] w-full relative flex justify-center">
          <div className="h-full absolute hidden xl:block">
            <Image
              src={backgroundImage}
              alt="background image"
              className="h-full w-full"
            />
          </div>
          <div className="h-full relative z-20 flex items-center">
            <div className="w-full flex justify-center">
              {displayReviews.length === 0 ? (
                <div className="text-sm text-gray-500 italic text-center">
                  Testimonials will appear here once {"they're"} available.
                </div>
              ) : (
                <div className="xl:w-1/2 flex flex-row xl:flex-row gap-y-5 xl:gap-y-0 gap-x-5 card-carousel">
                  {displayReviews.map((review, index) => (
                    <div
                      key={`${review.firstName}-${review.lastName}-${index}`}
                      className="h-[16rem] scroll-container"
                    >
                      <TestimonialCard
                        name={`${review.firstName} ${review.lastName}`}
                        testimonial={review.review}
                        image={review.customerImage || ""}
                        rating={review.rating}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center px-7 xl:px-7"
        >
          <p className="text-sm text-gray-600">
            What are you waiting for? <br />
            Plug in to our trusted network of reliable car servicemen and
            experience the ease today!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
