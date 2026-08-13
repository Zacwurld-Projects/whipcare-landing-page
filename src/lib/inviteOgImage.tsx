import { ImageResponse } from "next/og";

export const INVITE_OG_SIZE = { width: 1200, height: 630 };
export const INVITE_OG_CONTENT_TYPE = "image/png";

export function inviteOgImage(title: string, description: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#701e00",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.85,
            fontWeight: 600,
          }}
        >
          Whipcare
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 28,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            opacity: 0.92,
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...INVITE_OG_SIZE }
  );
}
