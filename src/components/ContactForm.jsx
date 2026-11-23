import { useRouter } from "next/router";
import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import FormStatus, { Honeypot } from "./FormStatus";
import useFormSubmit from "@/hooks/useFormSubmit";

export default function ContactForm() {
    const router = useRouter();
    const plan = typeof router.query.plan === "string" ? router.query.plan : "";
    const interest = typeof router.query.interest === "string" ? router.query.interest.slice(0, 120) : "";
    const { status, message, onSubmit } = useFormSubmit({ plan });

    return (
        <form id="contact-form" onSubmit={onSubmit} className="relative grid gap-7" noValidate={false}>
            <Honeypot />
            {(plan || interest) && (
                <p className="rounded-full bg-white px-4 py-2 text-[14px] text-primary w-max max-w-full">
                    {plan ? "Selected plan" : "Interested in"}: <strong>{plan || interest}</strong>
                </p>
            )}
            <div className="grid gap-7 sm:grid-cols-2">
                <Input label="Your name" name="name" id="name" required autoComplete="name" maxLength={120} placeholder="Jane Smith" />
                <Input label="Company" name="company" id="company" autoComplete="organization" maxLength={160} placeholder="Optional" />
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
                <Input label="Email" type="email" name="email" id="email" required autoComplete="email" maxLength={200} placeholder="you@company.com" />
                <Input
                    label="Phone"
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    autoComplete="tel"
                    pattern="^\+?[0-9 ()\-]{7,20}$"
                    title="Digits, spaces and an optional leading +"
                    placeholder="+1 555 000 0000"
                />
            </div>
            <Input key={interest} label="Subject" name="subject" id="subject" maxLength={200} defaultValue={interest} placeholder="MVP, AI agent, ERP setup, automation…" />
            <Textarea label="About your project" id="message" name="message" rows={5} maxLength={5000} placeholder="What are you building, and what does success look like?" />
            <div className="flex flex-wrap items-center gap-5">
                <Button type="submit" id="submit-form" loading={status === "sending"}>
                    Send message
                </Button>
                <FormStatus status={status} message={message} />
            </div>
        </form>
    );
}
