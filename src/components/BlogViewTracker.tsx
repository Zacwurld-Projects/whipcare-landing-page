"use client";

import { useEffect } from "react";

type BlogViewTrackerProps = {
  blogId: string;
};

/** Records one page view when the user opens a blog post. */
export function BlogViewTracker({ blogId }: BlogViewTrackerProps) {
  useEffect(() => {
    if (!blogId) return;

    void fetch(`/api/blogs/${encodeURIComponent(blogId)}/view`, {
      method: "POST",
      keepalive: true,
    }).catch(() => {
      // View count must not block reading the post.
    });
  }, [blogId]);

  return null;
}
