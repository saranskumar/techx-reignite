"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "submitting" | "success" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Invitation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (name.trim().length < 2) {
      setStatus("error");
      setMessage("A name needs at least two letters.");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setStatus("error");
      setMessage("That does not read as an email address.");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  return (
    <section id="invitation" className="relative overflow-hidden bg-brown text-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full bg-amber/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-6">
          <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
            Invitation
          </p>
          <h2 className="font-display mt-6 max-w-lg text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            Request a place in the pavilion.
          </h2>
          <p className="font-editorial mt-8 max-w-md text-xl leading-8 text-cream/75 italic">
            We read every request. There is no ticket page, no booth, no
            countdown clock — only a list, held in amber.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          {status === "success" ? (
            <div
              role="status"
              className="border border-amber/40 px-8 py-12"
            >
              <p className="font-jp text-amber">受領</p>
              <h3 className="font-display mt-4 text-2xl font-semibold">
                Held in amber.
              </h3>
              <p className="mt-4 text-lg leading-8 text-cream/75">
                Thank you, {name.trim()}. We will write to {email.trim()} if a
                place opens for 2027.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="The name we should write back to"
                  aria-invalid={status === "error" && name.trim().length < 2}
                  className="h-12 rounded-none border-0 border-b border-amber/40 bg-transparent px-0 text-lg text-cream placeholder:text-cream/30 focus-visible:border-amber focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="you@studio.example"
                  aria-invalid={
                    status === "error" && !isValidEmail(email.trim())
                  }
                  className="h-12 rounded-none border-0 border-b border-amber/40 bg-transparent px-0 text-lg text-cream placeholder:text-cream/30 focus-visible:border-amber focus-visible:ring-0"
                />
              </div>

              {status === "error" && message ? (
                <p role="alert" className="text-sm text-amber">
                  {message}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="font-display h-14 rounded-none bg-amber px-8 text-[12px] tracking-[0.32em] text-cream uppercase hover:bg-amber/90"
              >
                {status === "submitting" ? "Holding…" : "Request invitation"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
