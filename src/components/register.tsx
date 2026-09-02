"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { CopyValue } from "@/components/copy-value";
import { Label } from "@/components/ui/label";
import { event, tickets, tracks } from "@/lib/event";

type Status = "idle" | "submitting" | "success" | "error";
type Membership = "cs" | "ieee" | "open" | "";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [track, setTrack] = useState<string>(tracks[0].id);
  const [membership, setMembership] = useState<Membership>("");
  const [memberId, setMemberId] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const price = useMemo(() => {
    return tickets.find((item) => item.id === membership)?.price ?? null;
  }, [membership]);

  useEffect(() => {
    const onPass = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (id === "cs" || id === "ieee" || id === "open") {
        setMembership(id);
        setStatus("idle");
      }
    };
    window.addEventListener("techx-pass", onPass);
    return () => window.removeEventListener("techx-pass", onPass);
  }, []);

  async function onSubmit(eventForm: React.FormEvent<HTMLFormElement>) {
    eventForm.preventDefault();
    setMessage(null);

    const data = new FormData(eventForm.currentTarget);
    const nextName = String(data.get("name") ?? name).trim();
    const nextEmail = String(data.get("email") ?? email).trim();
    const nextCollege = String(data.get("college") ?? college).trim();
    const nextTrack = String(data.get("track") ?? track);
    const nextMembership = String(data.get("membership") ?? membership) as Membership;
    const nextMemberId = String(data.get("memberId") ?? memberId).trim();

    setName(nextName);
    setEmail(nextEmail);
    setCollege(nextCollege);
    setTrack(nextTrack);
    setMembership(nextMembership);
    setMemberId(nextMemberId);

    if (nextName.length < 2) {
      setStatus("error");
      setMessage("Enter your full name.");
      return;
    }
    if (!isValidEmail(nextEmail)) {
      setStatus("error");
      setMessage("That does not read as an email address.");
      return;
    }
    if (nextCollege.length < 2) {
      setStatus("error");
      setMessage("Enter your college or university.");
      return;
    }
    if (!nextMembership) {
      setStatus("error");
      setMessage("Select IEEE membership status.");
      return;
    }
    if (
      (nextMembership === "cs" || nextMembership === "ieee") &&
      !/^\d{8,9}$/.test(nextMemberId)
    ) {
      setStatus("error");
      setMessage("IEEE membership ID should be 8–9 digits.");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  const fieldClass =
    "h-12 w-full rounded-none border-0 border-b border-amber/40 bg-transparent px-0 text-base text-cream outline-none placeholder:text-cream/30 focus-visible:border-amber sm:text-lg";

  return (
    <section
      id="register"
      className="relative scroll-mt-24 overflow-hidden bg-brown text-cream"
    >
      <div className="page-pad grid min-w-0 gap-10 py-14 sm:gap-12 sm:py-20 md:grid-cols-12 md:py-28">
        <div className="min-w-0 md:col-span-5">
          <p className="font-display kicker text-[11px] text-amber uppercase">
            Registration
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,3.75rem)] leading-[1.08] font-semibold tracking-tight">
            Claim a delegate pass.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-cream/75">
            After you submit, pay the matching fee to{" "}
            <CopyValue value={event.upi} /> and write to{" "}
            <a
              href={`mailto:${event.email}`}
              className="break-all text-amber underline-offset-4 hover:underline"
            >
              {event.email}
            </a>{" "}
            with your name in the remarks. This form is held locally until the
            chapter confirms your transfer.
          </p>
          {price ? (
            <p className="font-editorial mt-8 text-4xl italic text-amber">
              ₹{price}
            </p>
          ) : null}
        </div>

        <div className="min-w-0 md:col-span-6 md:col-start-7">
          {status === "success" ? (
            <div role="status" className="border border-amber/40 px-6 py-10 sm:px-8">
              <h3 className="font-display text-2xl font-semibold">
                Request received.
              </h3>
              <p className="mt-4 text-base leading-8 text-cream/75">
                Thank you, {name}. Pay ₹
                {tickets.find((item) => item.id === membership)?.price} to{" "}
                {event.upi} and email the receipt to {event.email}. We will
                write to {email}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-7" noValidate>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                >
                  Full name
                </Label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                >
                  Email
                </Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="college"
                  className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                >
                  College / university
                </Label>
                <input
                  id="college"
                  name="college"
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="track"
                  className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                >
                  Track interest
                </Label>
                <select
                  id="track"
                  name="track"
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className={`${fieldClass} appearance-none`}
                >
                  {tracks.map((item) => (
                    <option key={item.id} value={item.id} className="bg-brown text-cream">
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <fieldset className="flex flex-col gap-3">
                <legend className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase">
                  IEEE membership
                </legend>
                {tickets.map((item) => (
                  <label
                    key={item.id}
                    className="flex min-h-11 cursor-pointer items-center gap-3 text-sm sm:text-base"
                  >
                    <input
                      type="radio"
                      name="membership"
                      value={item.id}
                      checked={membership === item.id}
                      onChange={() => {
                        setMembership(item.id);
                        if (status === "error") setStatus("idle");
                      }}
                      className="size-4 accent-amber"
                    />
                    <span>
                      {item.name} · ₹{item.price}
                    </span>
                  </label>
                ))}
              </fieldset>
              {membership === "cs" || membership === "ieee" ? (
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="memberId"
                    className="font-display text-[11px] tracking-[0.28em] text-cream/70 uppercase"
                  >
                    IEEE membership ID
                  </Label>
                  <input
                    id="memberId"
                    name="memberId"
                    inputMode="numeric"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    placeholder="8–9 digits"
                    className={fieldClass}
                  />
                </div>
              ) : null}

              {status === "error" && message ? (
                <p role="alert" className="text-sm text-amber">
                  {message}
                </p>
              ) : null}

              <Button
                nativeButton
                type="submit"
                disabled={status === "submitting"}
            className="btn-amber font-display h-12 w-full rounded-none px-6 text-[11px] tracking-[0.22em] uppercase sm:h-14 sm:w-auto sm:tracking-[0.28em]"
              >
                {status === "submitting" ? "Holding…" : "Submit registration"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
