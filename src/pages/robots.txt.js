// src/pages/robots.txt.js

export async function getServerSideProps({ res }) {
  const hostname = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.fajraan.tech';
  // Ensure precise trailing slash connection for paths
  const baseSettings = hostname.endsWith('/') ? hostname : `${hostname}/`;

  const content = `
# Global Access Rules - Open for Search Engines and AI Indexers
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /dashboard

# Extended AI Interaction Data Policies
# Our purpose-based usage guidelines are declared here:
# See: ${baseSettings}ai.txt
# See: ${baseSettings}llms.txt

# Global Sitemap Location
Sitemap: ${baseSettings}sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(content.trim());
  res.end();

  return { props: {} };
}

export default function RobotsTxt() {
  return null;
}