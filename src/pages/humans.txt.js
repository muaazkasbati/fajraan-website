export async function getServerSideProps({ res }) {
const content = `
/* COMPANY */
Company: Fajraan Tech
Founder & CEO: Muaaz Kasbati
Co-Founder: Talha Ahmed
Website: https://www.fajraan.tech
Email: info@fajraan.com
Founded: June 2025
Headquarters: Wyoming, United States

/* MAILING ADDRESS */
1001 S Main St Ste 5965
Kalispell, Montana 59901-1498
United States

/* ABOUT */
Fajraan Tech is a full-stack digital agency delivering innovative solutions across Web Development, Mobile Apps, UI/UX Design, Media Production, Digital Marketing, and Data Services.

/* TECHNOLOGY STACK */
Frontend: Next.js, React.js, Tailwind CSS
Backend: Node.js, Express.js, Firebase
Database: MongoDB, Firestore
Design: Figma, Adobe Creative Suite
Deployment: Vercel, Cloudflare, Firebase Hosting

/* REGIONS SERVED */
United States, North America, Middle East, and Global Clients

/* CREDITS */
Crafted with ❤️ by the Fajraan Tech Team
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content.trim());
  res.end();

  return { props: {} };
}

export default function HumansTxt() {
  return null;
}
