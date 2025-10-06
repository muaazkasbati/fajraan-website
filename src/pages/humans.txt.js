export async function getServerSideProps({ res }) {
  const content = `
/* TEAM */
Founder & CEO: Muaaz Kasbati
Company: Fajraan Tech
Website: https://www.fajraan.com
Email: info@fajraan.com
Founded: June 2025
Headquarters: Dubai, UAE

/* ABOUT */
Fajraan Tech is a full-stack digital agency delivering innovative solutions across
Web Development, Mobile Apps, UI/UX Design, Media Production, Digital Marketing, and Data Services.

/* TECHNOLOGY STACK */
Frontend: Next.js, React.js, Tailwind CSS
Backend: Node.js, Express.js, Firebase
Database: MongoDB, Firestore
Design: Figma, Adobe Creative Suite
Deployment: Vercel, Cloudflare, Firebase Hosting

/* REGIONS SERVED */
UAE, Middle East, and Global Clients

/* CREDITS */
Crafted with ❤️ by Fajraan Tech Team
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content.trim());
  res.end();

  return { props: {} };
}

export default function HumansTxt() {
  return null;
}
