"use client";

import { forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { getPreferredStoreUrl, PLAY_STORE_URL } from "@/constants/appLinks";

type GetAppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

export const GetAppLink = forwardRef<HTMLAnchorElement, GetAppLinkProps>(
  function GetAppLink({ children, ...props }, ref) {
    const [href, setHref] = useState(PLAY_STORE_URL);

    useEffect(() => {
      setHref(getPreferredStoreUrl());
    }, []);

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
);
