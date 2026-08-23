import { API_BASE_URL } from "@/lib/api";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/** Proxies POST /api/v1/admin/blogs/:id/view so the browser avoids CORS. */
export async function POST(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  if (!id?.trim()) {
    return new Response(null, { status: 400 });
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/blogs/${encodeURIComponent(id)}/view`,
      { method: "POST", cache: "no-store" }
    );

    return new Response(null, {
      status: response.ok ? 204 : response.status,
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}
