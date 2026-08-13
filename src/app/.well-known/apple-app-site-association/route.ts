import { NextResponse } from "next/server";

const appleAppSiteAssociation = {
  applinks: {
    apps: [] as string[],
    details: [
      {
        appID: "A5Y588G4YX.com.jozy.whipcareapp",
        paths: ["/profile", "/profile?*", "/join", "/join?*"],
      },
    ],
  },
};

export function GET() {
  return NextResponse.json(appleAppSiteAssociation, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
