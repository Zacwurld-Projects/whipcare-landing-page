// "use client";
// import { useEffect } from "react";
// import Image from "next/image";

// export default function MetaPixel() {
//   useEffect(() => {
//     // Meta Pixel script
//     (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
//       if (f.fbq) return;
//       n = f.fbq = function () {
//         n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
//       };
//       if (!f._fbq) f._fbq = n;
//       n.push = n;
//       n.loaded = true;
//       n.version = "2.0";
//       n.queue = [];
//       t = b.createElement(e);
//       t.async = true;
//       t.src = v;
//       s = b.getElementsByTagName(e)[0];
//       s.parentNode.insertBefore(t, s);
//     })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
//     (window as any).fbq("init", "1410731186844834");
//     (window as any).fbq("track", "PageView");
//   }, []);

//   return (
//     <noscript>
//       <Image
//         height={1}
//         width={1}
//         style={{ display: "none" }}
//         src="https://www.facebook.com/tr?id=1410731186844834&ev=PageView&noscript=1"
//         alt="Meta Pixel"
//       />
//     </noscript>
//   );
// }