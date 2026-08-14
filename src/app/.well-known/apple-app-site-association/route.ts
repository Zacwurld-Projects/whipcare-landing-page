import { NextResponse } from "next/server";

const appleAppSiteAssociation = {
  applinks: {
    apps: [] as string[],
    details: [
      {
        appID: "A5Y588G4YX.com.jozy.whipcareapp",
        appIDs: ["A5Y588G4YX.com.jozy.whipcareapp"],
        paths: ["/profile", "/profile/*", "/join", "/join/*"],
        components: [
          { "/": "/profile" },
          { "/": "/profile/*" },
          { "/": "/join" },
          { "/": "/join/*" },
        ],
      },
    ],
  },
};

export function GET() {
  return new NextResponse(JSON.stringify(appleAppSiteAssociation), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
