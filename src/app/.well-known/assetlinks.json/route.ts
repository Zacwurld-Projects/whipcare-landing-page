import { NextResponse } from "next/server";

const assetLinks = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.jozy.whipcareapp2",
      sha256_cert_fingerprints: [
        "B2:30:A7:66:F9:CA:46:E9:B4:9A:39:EC:C0:6D:56:6A:E1:5B:6F:A3:AF:47:88:A7:7C:03:76:A1:EB:A6:E3:D7",
      ],
    },
  },
];

export function GET() {
  return NextResponse.json(assetLinks, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
