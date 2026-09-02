"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export function CopyValue({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy"
      className={cn("break-all text-amber hover:text-amber-bright", className)}
    >
      {copied ? "Copied" : value}
    </button>
  );
}
