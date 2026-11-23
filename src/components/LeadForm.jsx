import React from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import FormStatus, { Honeypot } from "./FormStatus";
import useFormSubmit from "@/hooks/useFormSubmit";

const fleetSizeOptions = [
    { value: "1-10", label: "1–10 vehicles" },
    { value: "10-50", label: "10–50 vehicles" },
    { value: "50+", label: "50+ vehicles" },
];

const bookingMethodOptions = [
    { value: "Spreadsheets", label: "Spreadsheets" },
    { value: "WhatsApp/phone", label: "WhatsApp / phone" },
    { value: "Third-party software", label: "Third-party software" },
    { value: "Other", label: "Other" },
];

export default function LeadForm() {
    const { status, message, onSubmit } = useFormSubmit({ leadForm: true, subject: "Chauffeur software enquiry" });

    return (
        <form id="lead-form" onSubmit={onSubmit} className="relative grid gap-7">
            <Honeypot />
            <div className="grid gap-7 sm:grid-cols-2">
                <Input label="Name" name="name" id="lead-name" required autoComplete="name" maxLength={120} />
                <Input label="Company" name="company" id="lead-company" autoComplete="organization" maxLength={160} />
            </div>
            <Input label="Email" type="email" name="email" id="lead-email" required autoComplete="email" maxLength={200} />
            <div className="grid gap-7 sm:grid-cols-2">
                <Select label="Fleet size" id="fleetSize" name="fleetSize" required placeholder="Choose one" options={fleetSizeOptions} />
                <Select label="Current booking method" id="bookingMethod" name="bookingMethod" required placeholder="Choose one" options={bookingMethodOptions} />
            </div>
            <div className="flex flex-wrap items-center gap-5">
                <Button type="submit" loading={status === "sending"}>Request a demo</Button>
                <FormStatus status={status} message={message} />
            </div>
        </form>
    );
}
