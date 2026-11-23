export const nav = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Work", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
];

export const contact = {
    email: "info@fajraan.com",
    whatsappLabel: "+971 54 225 9592",
    whatsappHref: "https://wa.me/971542259592",
    phoneLabel: "+1 (406) 229-9260",
    phoneHref: "tel:+14062299260",
    address: "1001 S Main St Ste 5965, Kalispell, Montana 59901-1498, United States",
};

export const socials = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/fajraan-tech",
        path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.51v6.24zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z",
    },
    {
        name: "X",
        href: "https://x.com/fajraantech",
        path: "M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.1L6.6 22H3.5l7.3-8.4L1 2h6.3l4.4 5.5L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/fajraantech",
        path: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/fajraantech",
        path: "M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z",
    },
    {
        name: "GitHub",
        href: "https://github.com/fajraantech",
        path: "M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.2 2.1.5-.3.7-.8.8-1.2-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0C16 5 17 5.3 17 5.3c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.5 5.5-5 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z",
    },
    {
        name: "Behance",
        href: "https://www.behance.net/fajraantech",
        path: "M9.5 11.2c1.3-.6 2-1.6 2-3.1C11.5 6 10 4.7 7.5 4.7H2v14.6h5.9c2.8 0 4.6-1.4 4.6-3.8 0-1.7-1-2.8-3-3.3zM4.2 7h3c1.1 0 1.8.5 1.8 1.5S8.4 10 7.2 10H4.2V7zm3.3 9.9H4.2v-4.2h3.4c1.4 0 2.2.7 2.2 2.1 0 1.3-.9 2.1-2.3 2.1zM15.5 7h6v1.6h-6V7zm3 3.1c-2.5 0-4.3 1.9-4.3 4.7 0 2.8 1.8 4.6 4.3 4.6 2.1 0 3.6-1.2 4-3h-2.2c-.3.8-1 1.2-1.8 1.2-1.3 0-2.2-.9-2.3-2.3h6.5v-.6c0-3-1.7-4.6-4.2-4.6zm-2.3 3.7c.2-1.2 1.1-1.9 2.3-1.9 1.2 0 2 .8 2.1 1.9h-4.4z",
    },
];

export function SocialIcon({ path, size = 18 }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
            <path d={path} />
        </svg>
    );
}
