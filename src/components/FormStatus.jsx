export default function FormStatus({ status, message }) {
    return (
        <p
            role="status"
            aria-live="polite"
            className={`min-h-6 text-[15px] ${status === "error" ? "text-red-700" : "text-primary"}`}
        >
            {message}
        </p>
    );
}

/** Hidden field bots tend to fill; the API silently drops those submissions. */
export function Honeypot() {
    return (
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
    );
}
