import { z } from "zod";
import { CORE_API_BASE_URL } from "@/lib/api";

const stripControlChars = (value: string) =>
  value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

const nameSchema = z
  .string()
  .transform(stripControlChars)
  .pipe(
    z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name must be 80 characters or fewer")
      .regex(
        /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]*$/u,
        "Name can only include letters, spaces, apostrophes, dots, and hyphens"
      )
  );

const emailSchema = z
  .string()
  .transform((value) => stripControlChars(value).toLowerCase())
  .pipe(
    z
      .string()
      .min(1, "Email is required")
      .max(254, "Email must be 254 characters or fewer")
      .email("Enter a valid email address")
  );

const messageSchema = z
  .string()
  .transform(stripControlChars)
  .pipe(
    z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(2000, "Message must be 2000 characters or fewer")
  );

const localPhoneSchema = z
  .string()
  .transform((value) => stripControlChars(value).replace(/\D/g, ""))
  .pipe(
    z
      .string()
      .min(1, "Phone number is required")
      .regex(
        /^0\d{10}$/,
        "Enter a valid Nigerian phone number (11 digits starting with 0)"
      )
  );

const apiPhoneSchema = z
  .string()
  .regex(
    /^\+234\d{10}$/,
    "Enter a valid Nigerian phone number (11 digits starting with 0)"
  );

export const contactUsFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phoneNumber: localPhoneSchema,
  message: messageSchema,
});

export const contactUsPayloadSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phoneNumber: apiPhoneSchema,
  message: messageSchema,
});

export type ContactUsPayload = z.infer<typeof contactUsPayloadSchema>;

export type ContactUsFieldErrors = Partial<
  Record<keyof ContactUsPayload, string>
>;

export function parseContactUsForm(
  input: unknown
):
  | { success: true; data: ContactUsPayload }
  | { success: false; fieldErrors: ContactUsFieldErrors; formError: string } {
  const result = contactUsFormSchema.safeParse(input);

  if (result.success) {
    return {
      success: true,
      data: {
        ...result.data,
        phoneNumber: `+234${result.data.phoneNumber.slice(1)}`,
      },
    };
  }

  const fieldErrors: ContactUsFieldErrors = {};

  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (
      (key === "name" ||
        key === "email" ||
        key === "phoneNumber" ||
        key === "message") &&
      !fieldErrors[key]
    ) {
      fieldErrors[key] = issue.message;
    }
  }

  return {
    success: false,
    fieldErrors,
    formError: "Please fix the highlighted fields.",
  };
}

type ContactUsResponse = {
  status: boolean;
  statusCode: number;
  message: string;
};

export async function submitContactUs(
  payload: ContactUsPayload
): Promise<ContactUsResponse> {
  const parsed = contactUsPayloadSchema.safeParse(payload);
  if (!parsed.success) {
    throw new Error("Invalid contact form data.");
  }

  const response = await fetch(`${CORE_API_BASE_URL}/api/v1/website/contact-us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(parsed.data),
  });

  const data = (await response.json().catch(() => null)) as ContactUsResponse | null;

  if (!response.ok || !data?.status) {
    throw new Error(data?.message || "Failed to send message. Please try again.");
  }

  return data;
}
