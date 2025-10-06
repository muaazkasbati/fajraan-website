// src/pages/robots.txt.js

export async function getServerSideProps({ res }) {
  const hostname = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.fajraan.com';

  const content = `
User-agent: *
Allow: /

Sitemap: ${hostname}sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content.trim());
  res.end();

  return { props: {} };
}

export default function RobotsTxt() {
  return null;
}
