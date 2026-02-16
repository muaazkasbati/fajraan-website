const staticRoutes = [
  { path: '', changefreq: 'daily', priority: 1.0 },
  { path: 'about', changefreq: 'monthly', priority: 0.8 },
  { path: 'contact', changefreq: 'monthly', priority: 0.8 },
  { path: 'faqs', changefreq: 'monthly', priority: 0.7 },
  { path: 'portfolio', changefreq: 'monthly', priority: 0.7 },
  { path: 'pricing', changefreq: 'yearly', priority: 0.6 },
  { path: 'privacy-policy', changefreq: 'yearly', priority: 0.6 },
  { path: 'terms-and-conditions', changefreq: 'yearly', priority: 0.6 },
  { path: 'services', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/web-development', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/mobile-desktop-applications', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/design-services', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/media-animation', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/digital-marketing-content', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/data-admin-services', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/cloud-devops-solutions', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/ai-automation', changefreq: 'monthly', priority: 0.7 },
  { path: 'services/cybersecurity-it-support', changefreq: 'monthly', priority: 0.7 },
  { path: 'blog', changefreq: 'daily', priority: 0.8 },
  { path: 'api/sitemap/blog', changefreq: 'daily', priority: 0.8 },
];


export async function getServerSideProps({ res }) {
  const hostname = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.fajraan.com';
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
      .map(
        ({ path, changefreq, priority }) => `
  <url>
    <loc>${hostname}${path ? (hostname.endsWith('/') ? '' : '/') + path : ''}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
      )
      .join('')}
      
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
