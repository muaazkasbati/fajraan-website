import { useState } from "react";

/** Shared submit logic for the contact + lead forms. */
export default function useFormSubmit(extra = {}) {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        setMessage("");

        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 20000);
        try {
            const data = Object.fromEntries(new FormData(form).entries());
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, ...extra }),
                signal: ctrl.signal,
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(json.message || "Something went wrong.");
            form.reset();
            setStatus("sent");
            setMessage("Thanks, your message is on its way. We'll get back to you soon.");
        } catch (err) {
            setStatus("error");
            setMessage(
                err.name === "AbortError"
                    ? "This is taking too long. Please try again, or email info@fajraan.com."
                    : `${err.message} You can also email info@fajraan.com.`
            );
        } finally {
            clearTimeout(timer);
        }
    };

    return { status, message, onSubmit };
}
