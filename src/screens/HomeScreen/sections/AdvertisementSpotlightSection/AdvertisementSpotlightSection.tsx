"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import vehicleHealthProPhones from "@/assets/vehicle-health-pro-phones.png";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "../../../../components/ui/card";
import { cn } from "../../../../lib/utils";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
} from "../../../../constants/appLinks";

const slides = [
  { type: "feature" as const },
  { type: "ads" as const },
  { type: "vehicleHealth" as const },
];

const healthFeatures = [
  {
    title: "Vehicle Predictive Maintenance",
    description:
      "Stay ahead of breakdowns. We scan your vehicle and flag what needs attention before it becomes a problem.",
    icon: (
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16.65 17.5017C16.4614 17.5017 16.3672 17.5017 16.3086 17.5603C16.25 17.6188 16.25 17.7131 16.25 17.9017V18.3836C16.25 18.7624 16.4908 19.1087 16.8719 19.2781C16.8869 19.2847 16.9018 19.2914 16.9167 19.2981C17.148 19.4013 17.3727 19.5017 17.6406 19.5017H19.3594C19.6273 19.5017 19.852 19.4013 20.0833 19.2981C20.0982 19.2914 20.1131 19.2847 20.1281 19.2781C20.5092 19.1087 20.75 18.7624 20.75 18.3836V17.4949C20.75 17.2393 20.75 17.1114 20.6795 17.0515C20.609 16.9916 20.4667 17.0149 20.182 17.0614C20.1537 17.066 20.1252 17.0702 20.0965 17.074L16.9796 17.4865C16.9035 17.4966 16.8268 17.5017 16.75 17.5017H16.65Z" fill="white" />
        <path d="M4.85 17.5019C5.03856 17.5019 5.13284 17.5019 5.19142 17.5605C5.25 17.619 5.25 17.7133 5.25 17.9019V18.3838C5.25 18.7626 5.00925 19.1089 4.62812 19.2783C4.61314 19.2849 4.5982 19.2916 4.58329 19.2983C4.35202 19.4015 4.12734 19.5019 3.85942 19.5019H2.14058C1.87266 19.5019 1.64798 19.4015 1.41671 19.2983C1.4018 19.2916 1.38686 19.2849 1.37188 19.2783C0.990752 19.1089 0.75 18.7626 0.75 18.3838V17.4951C0.75 17.2394 0.75 17.1116 0.820477 17.0517C0.890954 16.9918 1.03329 17.0151 1.31797 17.0616C1.34626 17.0662 1.37479 17.0704 1.40355 17.0742L4.52037 17.4867C4.59651 17.4968 4.67322 17.5019 4.75 17.5019H4.85Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.855792 5.30301C1.10278 4.80903 1.70345 4.6088 2.19743 4.85579L3.19743 5.35579C3.69141 5.60278 3.89164 6.20345 3.64465 6.69743C3.39766 7.19141 2.79698 7.39164 2.30301 7.14465L1.30301 6.64465C0.809027 6.39766 0.608803 5.79698 0.855792 5.30301ZM20.6446 5.30301C20.8916 5.79698 20.6914 6.39766 20.1974 6.64465L19.1974 7.14465C18.7035 7.39164 18.1028 7.19141 17.8558 6.69743C17.6088 6.20345 17.809 5.60278 18.303 5.35579L19.303 4.85579C19.797 4.6088 20.3977 4.80903 20.6446 5.30301Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.0933 6.54564C19.5122 6.97922 20.0298 7.51497 20.4598 8.09048C21.0002 8.81375 21.5 9.72107 21.5 10.7496V14.2202C21.5 15.0975 20.9067 15.9564 19.9652 16.081L16.8484 16.4935C16.8158 16.4978 16.7829 16.5 16.75 16.5H4.75C4.71709 16.5 4.68422 16.4978 4.65159 16.4935L1.53475 16.081C0.593323 15.9564 0 15.0975 0 14.2202V10.7496C0 9.72107 0.499837 8.81375 1.04022 8.09048C1.4702 7.51497 1.98763 6.97942 2.40654 6.54585C2.49162 6.45778 2.5104 6.38077 2.55007 6.26582L3.62241 3.15846C3.82214 2.5796 3.9972 2.07221 4.19107 1.66969C4.40065 1.23453 4.67061 0.835739 5.10853 0.530867C5.54644 0.225994 6.0235 0.104733 6.51717 0.050293C6.97382 -6.48238e-05 7.52751 -3.43081e-05 8.15922 1.93157e-06H13.3408C13.9725 -3.43081e-05 14.5262 -6.48238e-05 14.9828 0.050293C15.4765 0.104733 15.9536 0.225994 16.3915 0.530867C16.8294 0.835739 17.0993 1.23453 17.3089 1.66969C17.5028 2.07221 17.6778 2.57957 17.8776 3.15843L18.9499 6.26582C18.9873 6.37416 19.0132 6.46279 19.0933 6.54564ZM5.5297 6C5.14606 6 4.95424 6 4.86452 5.87413C4.7748 5.74825 4.83737 5.56693 4.96253 5.20427L5.44783 3.79798C5.66843 3.15875 5.8095 2.75446 5.95106 2.46053C6.13093 2.08706 6.32661 1.95842 6.73735 1.91313C7.0708 1.87636 7.5125 1.87494 8.21009 1.87494H13.2899C13.9875 1.87494 14.4292 1.87636 14.7626 1.91313C15.1734 1.95842 15.3691 2.08706 15.5489 2.46053C15.6905 2.75446 15.8316 3.15875 16.0522 3.79798L16.5375 5.20427C16.6626 5.56693 16.7252 5.74825 16.6355 5.87413C16.5458 6 16.3539 6 15.9703 6H5.5297ZM2.08557 9.32934C1.71509 9.1441 1.26459 9.29427 1.07934 9.66475C0.894102 10.0352 1.04427 10.4857 1.41475 10.671L2.91475 11.421C3.28524 11.6062 3.73574 11.4561 3.92098 11.0856C4.10623 10.7151 3.95606 10.2646 3.58557 10.0793L2.08557 9.32934ZM20.0856 10.671C20.4561 10.4857 20.6062 10.0352 20.421 9.66475C20.2357 9.29427 19.7852 9.1441 19.4148 9.32934L17.9148 10.0793C17.5443 10.2646 17.3941 10.7151 17.5793 11.0856C17.7646 11.4561 18.2151 11.6062 18.5856 11.421L20.0856 10.671ZM11.7192 12.75H9.78143C8.79772 12.75 8.30587 12.75 7.92494 13.0235C7.62929 13.2358 7.45306 13.5751 7.21817 14.1692C7.11499 14.4302 7.0634 14.5607 7.12275 14.6554C7.1821 14.75 7.31701 14.75 7.58682 14.75H13.9139C14.1837 14.75 14.3186 14.75 14.3779 14.6554C14.4373 14.5607 14.3857 14.4302 14.2825 14.1692C14.0476 13.5751 13.8714 13.2358 13.5757 13.0235C13.1948 12.75 12.7029 12.75 11.7192 12.75Z" fill="white" />
      </svg>
    ),
  },
  {
    title: "Scheduled Maintenance",
    description:
      "Keep your vehicle running at its best. We'll remind you when it's time for your next service, filter change, or inspection.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9255 0.00654695C11.4291 0.0442833 11.8378 0.27148 12.2106 0.563188C12.5613 0.837549 12.9493 1.22567 13.403 1.6794L13.6452 1.88741C13.9019 2.1072 14.0302 2.21757 14.1843 2.27901C14.3384 2.34043 14.5077 2.34892 14.8454 2.36592L15.2175 2.38448C15.9286 2.38444 16.5364 2.38463 17.0222 2.44991C17.5408 2.51964 18.0316 2.67526 18.4284 3.07198C18.8252 3.46878 18.9817 3.95953 19.0515 4.47823C19.1168 4.96396 19.116 5.57182 19.1159 6.28291L19.1355 6.65498C19.1525 6.9927 19.1609 7.16196 19.2224 7.31612C19.2838 7.47008 19.3934 7.59866 19.613 7.85518L19.821 8.09737C20.2748 8.55109 20.6628 8.93906 20.9372 9.28975C21.229 9.66265 21.4561 10.0713 21.4939 10.5749C21.5026 10.6916 21.5026 10.8088 21.4939 10.9255C21.4561 11.4291 21.229 11.8378 20.9372 12.2106C20.6628 12.5613 20.2748 12.9493 19.821 13.403L19.613 13.6452C19.3934 13.9017 19.2838 14.0304 19.2224 14.1843C19.1609 14.3384 19.1525 14.5077 19.1355 14.8454L19.1159 15.2175C19.116 15.9285 19.1167 16.5365 19.0515 17.0222C18.9817 17.5409 18.8252 18.0316 18.4284 18.4284C18.0316 18.8252 17.5409 18.9817 17.0222 19.0515C16.5365 19.1167 15.9285 19.116 15.2175 19.1159L14.7878 19.1462C14.45 19.1697 14.2808 19.1813 14.1276 19.2458C13.9743 19.3105 13.8474 19.4242 13.5944 19.6501L13.403 19.821C12.9493 20.2748 12.5613 20.6628 12.2106 20.9372C11.8378 21.229 11.4291 21.4561 10.9255 21.4939C10.8088 21.5026 10.6916 21.5026 10.5749 21.4939C10.0713 21.4561 9.66265 21.229 9.28975 20.9372C8.93906 20.6628 8.55108 20.2748 8.09737 19.821L7.85518 19.613C7.59867 19.3934 7.47009 19.2838 7.31612 19.2224C7.16196 19.1609 6.9927 19.1525 6.65498 19.1355L6.28291 19.1159C5.57182 19.116 4.96396 19.1168 4.47823 19.0515C3.95953 18.9817 3.46878 18.8252 3.07198 18.4284C2.67526 18.0316 2.51964 17.5408 2.44991 17.0222C2.38463 16.5364 2.38444 15.9286 2.38448 15.2175L2.36592 14.8454C2.34892 14.5077 2.34043 14.3384 2.27901 14.1843C2.21757 14.0302 2.1072 13.9019 1.88741 13.6452L1.6794 13.403C1.22567 12.9493 0.837549 12.5613 0.563188 12.2106C0.27148 11.8378 0.0442833 11.4291 0.00654695 10.9255C-0.00217709 10.8088 -0.00218754 10.6916 0.00654695 10.5749C0.0442868 10.0713 0.271441 9.66265 0.563188 9.28975C0.837569 8.93906 1.22564 8.55109 1.6794 8.09737L1.88741 7.85518C2.10722 7.59845 2.21759 7.47022 2.27901 7.31612C2.34043 7.16196 2.34892 6.99271 2.36592 6.65498L2.38448 6.28291C2.38444 5.57177 2.38461 4.96398 2.44991 4.47823C2.51964 3.95953 2.67518 3.46878 3.07198 3.07198C3.46878 2.67518 3.95953 2.51964 4.47823 2.44991C4.96398 2.38461 5.57177 2.38444 6.28291 2.38448L6.7126 2.3542C7.05092 2.33068 7.22041 2.31928 7.37373 2.25459C7.5269 2.18992 7.65334 2.0769 7.90596 1.85127L8.09737 1.6794C8.55109 1.22564 8.93906 0.837569 9.28975 0.563188C9.66265 0.271441 10.0713 0.0442868 10.5749 0.00654695C10.6916 -0.00218754 10.8088 -0.00217709 10.9255 0.00654695ZM9.75069 9.25069C9.1984 9.25069 8.75069 9.6984 8.75069 10.2507C8.75084 10.8028 9.1985 11.2507 9.75069 11.2507V15.2507C9.75084 15.8028 10.1985 16.2507 10.7507 16.2507C11.3027 16.2505 11.7505 15.8027 11.7507 15.2507V11.2106C11.7508 11.0108 11.7508 10.7726 11.7233 10.5681C11.6901 10.3212 11.6008 9.9799 11.3112 9.69014C11.0213 9.40023 10.6794 9.31127 10.4323 9.27803C10.2277 9.25052 9.98961 9.25056 9.78975 9.25069C9.77658 9.2507 9.7635 9.25069 9.75069 9.25069ZM10.7458 5.25069C10.196 5.25069 9.75069 5.6984 9.75069 6.25069C9.7509 6.80279 10.1961 7.25069 10.7458 7.25069H10.7546C11.3043 7.25069 11.7505 6.80279 11.7507 6.25069C11.7507 5.6984 11.3044 5.25069 10.7546 5.25069H10.7458Z" fill="white" />
      </svg>

    ),
  },
  {
    title: "Full Vehicle Information",
    description:
      "All your vehicle's details, history, and health status, organised and always up to date.",
    icon: (
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 0C4.80228 0 5.25 0.447715 5.25 1V3C5.25 3.55228 4.80228 4 4.25 4C3.69772 4 3.25 3.55228 3.25 3V1C3.25 0.447715 3.69772 0 4.25 0ZM16.25 0C16.8023 0 17.25 0.447715 17.25 1V3C17.25 3.55228 16.8023 4 16.25 4C15.6977 4 15.25 3.55228 15.25 3V1C15.25 0.447715 15.6977 0 16.25 0Z" fill="white" />
        <path d="M11.2607 1.25C13.2244 1.24998 14.781 1.24972 15.999 1.42676C17.2574 1.6097 18.2633 1.99549 19.0488 2.84473C19.8264 3.68557 20.1723 4.7479 20.3379 6.0791C20.5002 7.3839 20.5 9.05684 20.5 11.1904V11.8096C20.5 13.9432 20.5002 15.6161 20.3379 16.9209C20.1723 18.2521 19.8264 19.3144 19.0488 20.1553C18.2633 21.0045 17.2574 21.3903 15.999 21.5732C14.781 21.7503 13.2244 21.75 11.2607 21.75H9.23926C7.27556 21.75 5.71901 21.7503 4.50098 21.5732C3.24258 21.3903 2.23672 21.0045 1.45117 20.1553C0.673585 19.3144 0.327703 18.2521 0.162109 16.9209C-0.000158846 15.6161 -1.09037e-05 13.9431 0 11.8096V11.1904C-1.09037e-05 9.05686 -0.000158846 7.3839 0.162109 6.0791C0.327703 4.7479 0.673585 3.68557 1.45117 2.84473C2.23672 1.99549 3.24258 1.6097 4.50098 1.42676C5.71901 1.24972 7.27557 1.24998 9.23926 1.25H11.2607ZM7.25 11C6.69772 11 6.25 11.4477 6.25 12C6.25 12.5523 6.69772 13 7.25 13V16C7.25 16.5523 7.69772 17 8.25 17C8.80228 17 9.25 16.5523 9.25 16V12.4004C9.25 11.6272 8.62281 11 7.84961 11H7.25ZM11.25 11C10.6977 11 10.25 11.4477 10.25 12C10.25 12.5523 10.6977 13 11.25 13H11.9258L10.9424 15.6523C10.7503 16.1701 11.0145 16.7454 11.5322 16.9375C12.0499 17.1294 12.6253 16.8653 12.8174 16.3477L14.1719 12.6973C14.5086 11.7898 13.768 11 12.9707 11H11.25ZM4.25 6C3.69772 6 3.25 6.44772 3.25 7C3.25 7.55228 3.69772 8 4.25 8H16.25C16.8023 8 17.25 7.55228 17.25 7C17.25 6.44772 16.8023 6 16.25 6H4.25Z" fill="white" />
      </svg>

    ),
  },
] as const;

const PlayStoreIcon = () => (
  <svg className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M2.25 2.78873V21.2106C2.25012 21.2506 2.26204 21.2896 2.28427 21.3228C2.30649 21.3561 2.33803 21.382 2.37492 21.3973C2.41182 21.4127 2.45243 21.4168 2.49166 21.4092C2.5309 21.4016 2.56701 21.3826 2.59547 21.3545L12.1875 12.0001L2.59547 2.64483C2.56701 2.61677 2.5309 2.59773 2.49166 2.59011C2.45243 2.58249 2.41182 2.58663 2.37492 2.602C2.33803 2.61737 2.30649 2.64329 2.28427 2.6765C2.26204 2.70972 2.25012 2.74877 2.25 2.78873ZM16.2094 8.15639L4.18219 1.53014L4.17469 1.52592C3.9675 1.41342 3.77062 1.69373 3.94031 1.85686L13.3683 10.8719L16.2094 8.15639ZM3.94125 22.1434C3.77062 22.3065 3.9675 22.5869 4.17562 22.4744L4.18312 22.4701L16.2094 15.8439L13.3683 13.1275L3.94125 22.1434ZM21.0647 10.8283L17.7061 8.97858L14.5481 12.0001L17.7061 15.0203L21.0647 13.172C21.9783 12.6672 21.9783 11.3331 21.0647 10.8283Z"
      fill="white"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M17.0502 20.28C16.0702 21.23 15.0002 21.08 13.9702 20.63C12.8802 20.17 11.8802 20.15 10.7302 20.63C9.29016 21.25 8.53016 21.07 7.67016 20.28C2.79016 15.25 3.51016 7.59 9.05016 7.31C10.4002 7.38 11.3402 8.05 12.1302 8.11C13.3102 7.87 14.4402 7.18 15.7002 7.27C17.2102 7.39 18.3502 7.99 19.1002 9.07C15.9802 10.94 16.7202 15.05 19.5802 16.2C19.0102 17.7 18.2702 19.19 17.0402 20.29L17.0502 20.28ZM12.0302 7.25C11.8802 5.02 13.6902 3.18 15.7702 3C16.0602 5.58 13.4302 7.5 12.0302 7.25Z"
      fill="white"
    />
  </svg>
);

const StoreButtons = () => (
  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start sm:gap-4 lg:gap-8">
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-auto w-full items-center justify-center gap-1 rounded-lg bg-black px-4 py-2.5 sm:w-auto sm:px-5 sm:py-3"
    >
      <PlayStoreIcon />
      <span className="whitespace-nowrap font-inter text-[14px] font-semibold leading-[20.7px] text-white sm:text-lg">
        Get it on Playstore
      </span>
    </a>
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-auto w-full items-center justify-center gap-1 rounded-lg bg-black px-4 py-2.5 sm:w-auto sm:px-5 sm:py-3"
    >
      <AppStoreIcon />
      <span className="whitespace-nowrap font-inter text-[14px] font-semibold leading-[20.7px] text-white sm:text-lg">
        Get it on Appstore
      </span>
    </a>
  </div>
);

const VehicleHealthSlide = () => (
  <Card className="w-full min-w-0 shrink-0 basis-full snap-center snap-always overflow-hidden rounded-[20px] border-0 bg-[#711E00] shadow-none sm:rounded-[32px]">
    <CardContent className="relative flex flex-col gap-6 overflow-hidden p-5 sm:gap-8 sm:p-10 lg:min-h-[500px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-10 lg:p-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-35deg, transparent, transparent 18px, rgba(255,255,255,0.35) 18px, rgba(255,255,255,0.35) 20px)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-[540px] flex-col justify-between gap-6 sm:gap-8">
        <div className="flex flex-col gap-5 sm:gap-8">
          <h2 className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-white sm:text-[40px] lg:text-[48px]">
            Vehicle Health Pro
          </h2>

          <ul className="flex flex-col gap-4 sm:gap-6">
            {healthFeatures.map((feature) => (
              <li key={feature.title} className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-white/10 text-white sm:h-9 sm:w-9">
                  {feature.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-inter text-[13px] font-semibold leading-[1.3] text-white sm:text-[14px] lg:text-[16px]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-inter text-[12px] font-normal leading-[1.5] text-[#F3F4F6] sm:text-[13px] lg:text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <StoreButtons />
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center lg:justify-end">
        <Image
          src={vehicleHealthProPhones}
          alt="Vehicle Health Pro app screens"
          className="mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-2xl sm:max-w-[360px] lg:mx-0 lg:max-w-[480px] xl:max-w-[520px]"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 520px"
        />
      </div>
    </CardContent>
  </Card>
);

export const AdvertisementSpotlightSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getNearestIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return 0;

    const slideElements = Array.from(container.children) as HTMLElement[];
    if (slideElements.length === 0) return 0;

    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slideElements.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - slideCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    return nearest;
  }, []);

  const scrollToSlide = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const slide = container.children[index] as HTMLElement | undefined;
      if (!slide) return;

      container.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    },
    [],
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let frame = 0;

    const syncActiveIndex = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActiveIndex(getNearestIndex());
      });
    };

    container.addEventListener("scroll", syncActiveIndex, { passive: true });
    container.addEventListener("scrollend", syncActiveIndex);
    window.addEventListener("resize", syncActiveIndex);

    syncActiveIndex();

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("scroll", syncActiveIndex);
      container.removeEventListener("scrollend", syncActiveIndex);
      window.removeEventListener("resize", syncActiveIndex);
    };
  }, [getNearestIndex]);

  return (
    <section
      aria-label="Whipcare features and promotions"
      className="relative w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16"
    >
      <Reveal className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 sm:gap-6 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          className="flex w-full touch-pan-x snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 sm:gap-8 lg:gap-12 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => {
            if (slide.type === "ads") {
              return (
                <Card
                  key={`slide-${index}`}
                  className="w-full min-w-0 shrink-0 basis-full snap-center snap-always rounded-[20px] border-0 bg-[#f3f4f6] shadow-none sm:rounded-[32px]"
                >
                  <CardContent className="flex min-h-[280px] items-center justify-center p-6 sm:min-h-[400px] sm:p-10 lg:h-[500px] lg:p-0">
                    <h2 className="font-inter text-[48px] font-bold leading-none tracking-[0] text-[#701e00] sm:text-[64px] lg:text-[80px] lg:leading-[112px]">
                      Ads
                    </h2>
                  </CardContent>
                </Card>
              );
            }

            if (slide.type === "vehicleHealth") {
              return <VehicleHealthSlide key={`slide-${index}`} />;
            }

            return (
              <Card
                key={`slide-${index}`}
                className="w-full min-w-0 shrink-0 basis-full snap-center snap-always rounded-[20px] border-0 bg-[#701e00] shadow-none sm:rounded-[32px]"
              >
                <CardContent className="flex flex-col justify-between gap-8 p-5 sm:min-h-[420px] sm:gap-10 sm:p-10 lg:h-[500px] lg:flex-row lg:items-center lg:gap-8 lg:p-16">
                  <div className="flex w-full max-w-[500px] flex-col justify-between gap-8 self-stretch">
                    <div className="flex flex-col gap-5 sm:gap-8">
                      <header className="flex flex-col gap-3 sm:gap-4">
                        <h2 className="font-inter text-[28px] font-bold leading-[1.2] tracking-[0] text-white sm:text-[40px] lg:text-[length:var(--inter-h1-bold-font-size)] lg:leading-[var(--inter-h1-bold-line-height)]">
                          Your Vehicle, Our Care
                        </h2>
                        <p className="font-inter text-[14px] font-normal leading-[1.5] text-white sm:text-[16px] lg:text-[18px] lg:leading-[var(--inter-title-1-regular-line-height)]">
                          Sign up with your email and get informed about
                          discounts , Whipcare tips and exciting features coming
                          your way!
                        </p>
                      </header>
                      <form className="flex w-full max-w-[438px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <div className="flex h-11 flex-1 items-center rounded-lg bg-neutral-100 px-3 sm:h-12">
                          <span className="font-inter text-[14px] font-normal text-gray-500 opacity-[0.62] sm:text-[length:var(--inter-title-1-regular-font-size)]">
                            Enter your email
                          </span>
                        </div>
                        <button
                          type="button"
                          className="flex h-11 items-center justify-center rounded-lg bg-gray-100 px-5 py-3 sm:h-12 sm:px-6 sm:py-3.5"
                        >
                          <span className="whitespace-nowrap font-inter text-[14px] font-semibold text-[#701e00] sm:text-[length:var(--inter-body-semibold-font-size)]">
                            Stay Updated
                          </span>
                        </button>
                      </form>
                    </div>
                    <StoreButtons />
                  </div>
                  <div className="relative z-10 flex flex-1 items-center justify-center lg:justify-end">
                    <Image
                      src={vehicleHealthProPhones}
                      alt="Vehicle Health Pro app screens"
                      className="mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-2xl sm:max-w-[360px] lg:mx-0 lg:max-w-[480px] xl:max-w-[520px]"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 520px"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Advertisement slides"
        >
          {slides.map((_, index) => (
            <button
              key={`indicator-${index}`}
              type="button"
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={activeIndex === index}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "h-3 rounded-full transition-all duration-300 sm:h-3.5",
                activeIndex === index
                  ? "w-7 bg-[#333C4D] sm:w-8"
                  : "w-3 bg-[#D1D5DC] sm:w-3.5",
              )}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
};
