import { z } from "zod";
import { CORE_API_BASE_URL } from "@/lib/api";

const stripControlChars = (value: string) =>
  value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

export const emailListSchema = z.object({
  email: z
    .string()
    .transform((value) => stripControlChars(value).toLowerCase())
    .pipe(
      z
        .string()
        .min(1, "Email is required")
        .max(254, "Email must be 254 characters or fewer")
        .email("Enter a valid email address")
    ),
});

export type EmailListPayload = z.infer<typeof emailListSchema>;

export type EmailListFieldErrors = Partial<
  Record<keyof EmailListPayload, string>
>;

export function parseEmailListForm(
  input: unknown
):
  | { success: true; data: EmailListPayload }
  | { success: false; fieldErrors: EmailListFieldErrors; formError: string } {
  const result = emailListSchema.safeParse(input);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const fieldErrors: EmailListFieldErrors = {};

  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key === "email" && !fieldErrors.email) {
      fieldErrors.email = issue.message;
    }
  }

  return {
    success: false,
    fieldErrors,
    formError: "Please enter a valid email address.",
  };
}

type EmailListResponse = {
  status: boolean;
  statusCode: number;
  message: string;
  data?: {
    email: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
};

export async function submitEmailList(
  payload: EmailListPayload
): Promise<EmailListResponse> {
  const parsed = emailListSchema.safeParse(payload);
  if (!parsed.success) {
    throw new Error("Invalid email.");
  }

  const response = await fetch(`${CORE_API_BASE_URL}/api/v1/website/email-list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(parsed.data),
  });

  const data = (await response.json().catch(() => null)) as EmailListResponse | null;

  if (!response.ok || !data?.status) {
    throw new Error(
      data?.message || "Failed to join mailing list. Please try again."
    );
  }

  return data;
}
