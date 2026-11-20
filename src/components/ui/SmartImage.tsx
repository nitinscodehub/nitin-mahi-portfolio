import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SmartImage({
  src,
  alt,
  initials,
  accent = "a",
  className = "",
  imgClassName = "",
  eager = false,
}: {
  src: string;
  alt: string;
  initials: string;
  accent?: "a" | "b";
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const ring = accent === "a" ? "var(--color-a)" : "var(--color-b)";

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center rounded-3xl border-2 border-dashed text-4xl font-bold",
          className,
        )}
        style={{ borderColor: ring, color: ring }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={imgClassName}
    />
  );
}
