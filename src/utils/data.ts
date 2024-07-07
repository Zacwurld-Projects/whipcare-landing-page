// Services
import mechanicsIcon from "@/assets/icons/explore-orange.svg";
import detailersIcon from "@/assets/icons/explore-pink.svg";
import haulersIcon from "@/assets/icons/explore-green.svg";
import carWashIcon from "@/assets/icons/explore-purple.svg";

// Avatars
import avatar from "@/assets/images/avatar.png";

// Socials
import xIcon from "@/assets/icons/x.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Explore",
    url: "/explore",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

export const explore = [
  {
    title: "Create a profile",
    description: "Here is a step by step guide on how to use Whipcare.",
  },
  {
    title: "Book a service",
    description: "Here is a step by step guide on how to use Whipcare.",
  },
  {
    title: "Receive confirmation",
    description: "Here is a step by step guide on how to use Whipcare.",
  },
  {
    title: "Get your service",
    description: "Here is a step by step guide on how to use Whipcare.",
  },
  {
    title: "Rate your Review",
    description: "Here is a step by step guide on how to use Whipcare.",
  },
];

export const features = [
  {
    title: "Comprehensive Service Listings",
    list: [
      "Service Categories: Detailed listings for various services such as mechanics, detailers, and haulers.",
      "Service Descriptions: Clear and detailed descriptions of each service, including what is covered and any specializations.",
    ],
  },
  {
    title: "Service Provider Profiles",
    list: [
      "Provider Profiles: Detailed profiles for each service provider, including their qualifications and reviews.",
      "Provider Reviews: Ratings and reviews for each service provider, allowing you to make an informed decision.",
    ],
  },
  {
    title: "Easy Booking and Payment",
    list: [
      "Service Booking: Easy booking process for each service, allowing you to schedule your appointment quickly.",
      "Secure Payment: Secure payment processing for each service, ensuring your information is safe and protected.",
    ],
  },
  {
    title: "Customer Support",
    list: [
      "24/7 Support: Customer support available 24/7 to assist with any questions or issues you may have.",
      "Service Guarantee: Satisfaction guarantee for each service, ensuring you are happy with the results.",
    ],
  },
  {
    title: "User-Friendly Interface",
    list: [
      "Easy Navigation: User-friendly interface that makes it easy to find and book the services you need.",
      "Mobile Compatibility: Mobile compatibility for on-the-go booking, allowing you to schedule services from anywhere.",
    ],
  },
];

export const statistics = [
  {
    title: "50,000",
    description: "customers around the world.",
  },
  {
    title: "30+",
    description: "countries across the globe.",
  },
  {
    title: "100",
    description: "Real time active service providers",
  },
];

export const services = [
  {
    title: "Mechanics",
    icon: mechanicsIcon,
    description:
      "Our network of certified mechanics offer a range of expertise to keep your Whip running smoothly.",
    backgroundColor: "bg-[#FEEDEC]",
  },
  {
    title: "Detailers",
    icon: detailersIcon,
    description:
      "Enhance your Whip's appearance and protect its value with the best rated detailing services close to you.",
    backgroundColor: "bg-[#F5EBF2]",
  },
  {
    title: "Haulers",
    icon: haulersIcon,
    description:
      "Safe and efficient transportation for your Whip, whether it's across town or across the country, by our available top rated professional car haulers.",
    backgroundColor: "bg-[#EBFCFF]",
  },
  {
    title: "Car wash",
    icon: carWashIcon,
    description:
      "Keep your Whip looking its best with our thorough and convenient car wash options, courtesy of our available top rated car wash professionals.",
    backgroundColor: "bg-[#F4EBFF]",
  },
];

export const testimonials = [
  {
    name: "Leslie Alexander",
    testimonial:
      "Thanks to Whipcare, I found a fantastic mechanic right in my neighborhood. The booking process was seamless, and the service was top-notch.",
    image: avatar,
    rating: 5,
  },
  {
    name: "Jacob Jones",
    testimonial:
      "I've used Whipcare for both detailing and car wash services, and every experience has been excellent. The providers are professional, punctual, and very thorough",
    image: avatar,
    rating: 5,
  },
  {
    name: "Jenny Wilson",
    testimonial:
      "Keeping my classic car in pristine condition is important to me, and Whiocare connects me with detailers who understand and respect that. The attention to detail and quality of service are outstanding.",
    image: avatar,
    rating: 5,
  },
];

export const footerInfo = {
  company: [
    {
      title: "About us",
      link: "/about",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "FAQ's",
      link: "/faq",
    },
    {
      title: "Contact us",
      link: "/contact",
    },
  ],
  socials: [
    {
      name: "x",
      link: "",
      icon: xIcon,
    },
    {
      name: "facebook",
      link: "",
      icon: facebookIcon,
    },
    {
      name: "instragram",
      link: "",
      icon: instagramIcon,
    },
  ],
  contact: [
    {
      title: "+65 6156 5519",
    },
    {
      title: "hello@whipcare.app",
    },
  ],
};
