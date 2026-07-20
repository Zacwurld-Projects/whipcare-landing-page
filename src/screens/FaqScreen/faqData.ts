export type FaqItem = {
  question: string;
  answer: string;
};

export const generalFaqs: readonly FaqItem[] = [
  {
    question: "How do I download the app?",
    answer:
      "Search for Whipcare on the App Store or Google Play, or tap Get the App in the header to download and install it on your phone.",
  },
  {
    question: "What if a mechanic damages the car?",
    answer:
      "Money is held in escrow until the car owner confirms the job is done correctly. Provider agreements specify liability. 48-hour dispute window. More protection than any cash transaction in Nigeria today.",
  },
  {
    question: "Is Whipcare free to use?",
    answer:
      "Creating an account and browsing providers on Whipcare is free. You only pay for the services you book through the app.",
  },
  {
    question: "How do I earn as a service provider?",
    answer:
      "Sign up as a service provider, get verified, then accept bookings. You earn for every completed job, with payments released after the customer confirms the work.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Whipcare supports card payments, bank transfer, and Whip Point. All transactions are processed securely in-app.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Download the Whipcare app, tap Sign Up, enter your details, and verify your account to start booking or offering services.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Choose your service, pick a provider and time that works for you, add any notes, then confirm and pay to complete your booking.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes. Open the booking in the app to reschedule or cancel before the job starts. Cancellation terms may vary by provider and timing.",
  },
  {
    question: "How to become an affiliate with Whipcare?",
    answer:
      "Join the Whipcare affiliate program through the app or website, get your referral link, and earn when people you refer book or sign up.",
  },
] as const;
